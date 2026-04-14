# Auto Atlas
## Khái niệm cơ bản
Trong Cocos Creator, Auto Atlas là một công cụ cực kỳ hữu ích dùng để tự động gom nhiều hình ảnh nhỏ riêng lẻ thành một tấm ảnh lớn duy nhất khi Build game.
### Lợi ích
* Giảm lệnh vẽ: Mỗi tấm ảnh riêng lẻ thường tốn một "lệnh vẽ". Khi gom vào Atlas, GPU có thể vẽ nhiều hình cùng lúc chỉ với 1 lệnh, giúp game mượt hơn.
* Tiết kiệm bộ nhớ & Băng thông: Giảm số lượng yêu cầu HTTP (khi chơi web) và giúp GPU quản lý bộ nhớ hiệu quả hơn.
* Tự động hóa: Không cần dùng phần mềm bên thứ ba.

### Cơ chế hoạt động
* Tạo một file Auto Atlas Asset trong một thư mục chứa các ảnh con.
* Cocos sẽ quét toàn bộ ảnh trong thư mục đó và các thư mục con.
* Dựa trên các thuật toán Bin Packing, chương trình sẽ tính toán vị trí (x,y) cho từng ảnh nhỏ trên tấm ảnh lớn.
* Khi chạy game, Cocos sẽ tự động tìm đúng tọa độ của ảnh nhỏ đó để hiển thị mà không cần thay đổi code.

### Một số lưu ý
* Auto Atlas thường chỉ có tác dụng khi Build game. Trong cửa sổ Assets của Cocos Creator, vẫn tồn tại các ảnh rời rạc để dễ quản lý.
* Nếu tổng lượng ảnh vượt quá Max Width/Height, Cocos sẽ tự động tạo ra tấm Atlas thứ 2, thứ 3 (gọi là Page Split).

## Nâng cao
Giới hạn độ phân giải tối đa (Max Texture Size) phụ thuộc hoàn toàn vào GPU của thiết bị.

### Các mức giới hạn phổ biến (Max Texture Size)

| Phân khúc thiết bị | Độ phân giải tối đa | Ghi chú |
| :--- | :--- | :--- |
| **Thiết bị đời cũ / Giá rẻ** | **2048 x 2048 px** | Hầu hết các điện thoại Android cũ hoặc iPhone đời thấp (dưới iPhone 5S) chỉ hỗ trợ đến mức này. |
| **Thiết bị tầm trung hiện nay** | **4096 x 4096 px** | Phổ biến nhất hiện nay. Hỗ trợ tốt trên các máy chạy OpenGL ES 3.0+ hoặc WebGL 2.0. |
| **Thiết bị cao cấp / PC** | **8192 x 8192 px** hoặc cao hơn | Các dòng Flagship (iPhone 13+, Samsung S series mới) hoặc máy tính có card đồ họa rời. |

---

### Tại sao con số này lại quan trọng?

1.  **Lỗi hiển thị (Black Box):** Nếu để Auto Atlas là **4096** mà máy cũ chỉ hỗ trợ tối đa **2048**, texture sẽ không load được, dẫn đến việc hình ảnh bị biến thành các ô vuông màu đen hoặc văng game (crash).
2.  **Bộ nhớ RAM (VRAM):** Ngay cả khi thiết bị hỗ trợ 4096, một tấm ảnh 4096x4096px chưa nén sẽ chiếm khoảng **64MB RAM**. Nếu game có quá nhiều tấm Atlas lớn như vậy, các máy yếu sẽ bị tràn RAM và tự động đóng ứng dụng.
3.  **Hiệu suất (Draw Calls):** * Sử dụng Atlas lớn giúp gom được nhiều sprite vào một lần vẽ (**1 Draw Call**).
    * Tuy nhiên, nếu vượt quá giới hạn thiết bị, Cocos sẽ phải tự chia nhỏ hoặc lỗi, làm tăng Draw Calls và giảm FPS.

### Chỉ số Max Width và Max Height

Mặc dù Cocos Creator cho phép nhập bất kỳ con số nào vào ô Max Width và Max Height, nhưng việc sử dụng các số không phải là lũy thừa của 2 (Non-Power of Two - NPOT) sẽ mang lại nhiều bất lợi hơn là có lợi.

#### 1. Sự tương thích với GPU (Hardware Compatibility)
Hầu hết các chip đồ họa (GPU) trên điện thoại và máy tính được thiết kế để xử lý hình ảnh tối ưu nhất khi kích thước là lũy thừa của 2 ($2^n$).
* **Thiết bị cũ:** Nhiều GPU đời cũ hoàn toàn không hỗ trợ texture NPOT. Nếu để Atlas là `2000x2000`, thiết bị có thể sẽ không hiển thị được hoặc gây crash.
* **Tự động ép về POT:** Nếu đưa một tấm ảnh `2000x2000` vào, nhiều driver GPU sẽ tự động tạo một vùng đệm để biến nó thành `2048x2048` trong bộ nhớ RAM. Điều này có nghĩa là vẫn tốn bộ nhớ cho 2048 pixel nhưng lại không tận dụng được hết không gian đó.

#### 2. Mipmaps (Kỹ thuật làm mượt ảnh ở xa)
Nếu game của sử dụng **Mipmapping** (tạo ra các phiên bản nhỏ hơn của texture để giảm răng cưa khi thu nhỏ), GPU yêu cầu bắt buộc texture phải là **Power of Two**.
* Khi ảnh là POT, GPU có thể chia đôi kích thước liên tục ($2048 \rightarrow 1024 \rightarrow 512 \dots \rightarrow 1$) một cách hoàn hảo.
* Với số lẻ, việc chia đôi sẽ tạo ra các pixel lẻ, dẫn đến lỗi hiển thị hoặc không thể tạo Mipmaps.

#### 3. Nén Texture (Texture Compression)
Đây là phần quan trọng nhất để tối ưu dung lượng game. Các định dạng nén chuyên dụng cho mobile như **PVRTC** (trên iOS) yêu cầu texture bắt buộc phải là **bình phương của lũy thừa 2** (ví dụ: $1024 \times 1024$ hoặc $2048 \times 2048$).
* Nếu để kích thước lẻ, sẽ không thể sử dụng các chuẩn nén hiệu năng cao này, dẫn đến dung lượng bộ nhớ (VRAM) tăng gấp 4-8 lần.

---

#### 4. Khi nào thì có thể dùng số lẻ?
Bạn chỉ nên dùng số không phải mũ của 2 khi:
* Chỉ nhắm đến các thiết bị cực kỳ hiện đại (hỗ trợ WebGL 2.0 hoặc OpenGL ES 3.0 trở lên).
* Chắc chắn không dùng Mipmaps.
* Chấp nhận việc lãng phí một chút tài nguyên hệ thống để đổi lấy việc sắp xếp các sprite khít hơn theo ý đồ riêng.

---
**Lưu ý:** Trong bảng cài đặt Auto Atlas, nên tích chọn ô **"Power of Two"**. Khi đó, dù có đặt Max Width là 2000, Cocos vẫn sẽ tính toán và đóng gói tấm Atlas cuối cùng về mức 2048 để bảo vệ hiệu năng.