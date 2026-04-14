# Tìm hiểu thêm

## Draw call

Draw Call là một lệnh mà CPU gửi đến GPU (card đồ họa) để yêu cầu nó vẽ một đối tượng lên màn hình.
Trước khi gửi lệnh vẽ, CPU phải chuẩn bị rất nhiều thứ: tính toán vị trí, kiểm tra ánh sáng, chuyển đổi dữ liệu... Quá trình "chuẩn bị" này tốn thời gian hơn cả việc GPU thực sự vẽ

Một số phương pháp tối ưu draw call:

* Sử dụng Auto Atlas.

* Label (Chữ viết): Nếu dùng font hệ thống, mỗi dòng chữ có thể là 1 Draw Call. Tối ưu: Sử dụng Bitmap Font (font chữ bằng hình ảnh). Nếu Bitmap Font đó được gom vào chung Atlas với các sprite khác, Draw Call sẽ cực thấp.

* Thứ tự sắp xếp: Nhóm các đối tượng dùng chung Atlas nằm cạnh nhau trong cây thư mục.

## Các kiểu phông chữ

### Phông chữ hệ thống - System Font:
Đây là thiết lập mặc định khi tạo một Label mới. Nó yêu cầu game sử dụng bất kỳ font chữ mặc định nào được cài đặt trên hệ điều hành của người chơi.
* Ưu điểm: Hoàn toàn không tốn bộ nhớ hay dung lượng trong bản build game.
* Nhược điểm: Văn bản của sẽ hiển thị khác nhau trên từng thiết bị. Sẽ rất rủi ro nếu UI yêu cầu khoảng cách chữ chính xác đến từng pixel.
* Ứng dụng: Làm nguyên mẫu (prototyping), gỡ lỗi (debugging), hoặc các game chủ yếu chứa văn bản mà kiểu dáng chính xác không phải là ưu tiên và ưu tiên giữ dung lượng ứng dụng ở mức nhỏ nhất.

### Phông chữ động - Dynamic Font: 
Đây là cách phổ biến nhất để đảm bảo game trông đồng nhất. Import một file `.ttf` (TrueType Font) hoặc `.otf` (OpenType Font) tiêu chuẩn trực tiếp vào thư mục `assets` của Cocos Creator để sử dụng.

* Ưu điểm: Hiển thị giống hệt nhau trên mọi nền tảng và thiết bị. Tính linh hoạt rất cao.
* Nhược điểm: File font làm tăng tổng dung lượng tải xuống của game. Việc render văn bản động cũng nặng hơn một chút cho CPU/GPU so với các hình ảnh đã được render sẵn.
* Ứng dụng: Hầu hết các thành phần UI tiêu chuẩn như hộp thoại, menu, cài đặt, và tên người chơi.

### Phông chữ ảnh - Bitmap Font: 
Thay vì sử dụng các đường cong toán học để vẽ các chữ cái như TTF, Bitmap Font sử dụng một hình ảnh đã được vẽ sẵn. Nó bao gồm hai file: một file `.png` (một hình ảnh chứa tất cả các chữ cái, số và ký hiệu) và một file `.fnt` (một file văn bản cho engine biết tọa độ X/Y chính xác của từng ký tự trên hình ảnh đó).

* Ưu điểm: Hiệu suất đáng kinh ngạc. Bởi vì các chữ cái chỉ là hình ảnh (sprite), engine render chúng cực kỳ nhanh. Nó cũng cho phép các họa sĩ thêm vào các texture phức tạp, dải màu (gradient), viền nổi 3D (bevel) và bóng đổ đậm mà một file TTF tiêu chuẩn không làm được.
* Nhược điểm: Tốn bộ nhớ texture. Ngoài ra, nếu phóng to kích thước font quá mức, nó sẽ bị mờ hoặc vỡ hạt (vì nó chỉ là một hình ảnh). Bị giới hạn nghiêm ngặt ở những ký tự đã đưa (bake) vào hình ảnh (rất bất tiện với các hệ thống ngôn ngữ đồ sộ như tiếng Trung hoặc tiếng Nhật, trừ khi chỉ dùng cho những từ ngữ cụ thể).
* Ứng dụng: Số sát thương bay lên được cách điệu, bộ đếm combo, popup "Tăng cấp" (Level Up), và màn hình tiêu đề cách điệu.

### Phông chữ ảnh rút gọn - LableAtlas: 
Đây là một phiên bản rút gọn, chuyên biệt hóa cao của Bitmap Font, chủ yếu được sử dụng cho các con số.

* Ưu điểm: Cài đặt rất nhanh, không cần file cấu hình .fnt, hiệu suất cao.
* Nhược điểm: Chỉ hoạt động tốt với các ký tự monospaced (các chữ có khoảng cách bằng nhau, ví dụ: số "1" chiếm cùng một chiều rộng vật lý như số "8").
* Ứng dụng: Bộ đếm điểm số đơn giản, đồng hồ bấm giờ, hoặc bộ đếm tài nguyên (ví dụ: tiền vàng: 999).

## Type của Sprite:

### 1. Simple (Biểu diễn Đơn giản)
Đây là chế độ mặc định khi tạo một Sprite mới.

* **Cách hoạt động:** Nó lấy hình ảnh gốc của và kéo giãn hoặc bóp méo nó để vừa khít với Chiều rộng và Chiều cao chính xác đã thiết lập trên Node.
* **Nhược điểm:** Nếu kéo giãn một hình vuông thành một hình chữ nhật dài, hình ảnh sẽ bị méo và biến dạng.
* **Áp dụng cho:** * Sprite nhân vật hoặc icon luôn giữ nguyên tỷ lệ khung hình (aspect ratio) gốc.
    * Hình nền hiển thị toàn màn hình.
    * Các hình ảnh có thể kéo giãn đều ra các hướng.

### 2. Sliced (Cắt 9 phần / 9-Slicing)
Có thể nói đây là kiểu Sprite quan trọng nhất để xây dựng UI (Giao diện người dùng).

* **Cách hoạt động:** Sử dụng một kỹ thuật gọi là "9-patch" hoặc "9-slicing". Về cơ bản, nó chia hình ảnhß thành một lưới 3x3 (9 phần). 
    * **4 góc** không bao giờ thay đổi kích thước hay bị méo.
    * **Cạnh trên/dưới** chỉ kéo giãn theo chiều ngang.
    * **Cạnh trái/phải** chỉ kéo giãn theo chiều dọc.
    * **Phần trung tâm** kéo giãn ra mọi hướng.
* **Nhược điểm:** Trước khi có thể sử dụng chế độ này, **phải** cấu hình viền (border) cho SpriteFrame. làm điều này bằng cách chọn asset hình ảnh trong thư mục assets, nhấp vào "Edit" (hoặc chỉnh sửa thuộc tính border), và kéo các đường màu xanh lá cây để xác định các góc. Nếu không xác định viền, "Sliced" sẽ hoạt động y hệt như "Simple".
* **Áp dụng cho:**
    * Các bảng UI (Panels), hộp thoại (dialog boxes) và cửa sổ.
    * Các nút bấm (buttons) có chiều rộng và chiều cao khác nhau.
    * Hình nền của thanh máu (Health bar). 

### 3. Tiled (Xếp gạch)
Kiểu này được sử dụng cho các mẫu (pattern) lặp lại.

* **Cách hoạt động:** Thay vì kéo giãn hình ảnh để vừa với kích thước của Node, nó giữ nguyên hình ảnh ở tỷ lệ gốc 100% và **lặp lại** nó liên tục (giống như lát gạch trên sàn nhà) cho đến khi lấp đầy Chiều rộng và Chiều cao của Node.
* **Nhược điểm:** Để hình ảnh hiển thị đúng theo cách này, Chiều rộng và Chiều cao của Node của phải lớn hơn kích thước của hình ảnh gốc.
* **Áp dụng cho:**
    * Bức tường gạch, mặt đất trồng cỏ, hoặc các texture đất lặp lại trong các game đi cảnh (platformer) 2D.
    * Hình nền cuộn liền mạch (Seamless scrolling backgrounds).
    * Các đường phân cách UI lặp lại hoặc đường viền nét đứt.

### 4. Filled (Đổ đầy)
Kiểu này cho phép cắt bớt hoặc ẩn đi một phần của sprite một cách linh hoạt dựa trên phần trăm.

* **Cách hoạt động:** Khi chọn "Filled", các thuộc tính mới sẽ xuất hiện trong bảng Inspector:
    * **Fill Type (Kiểu đổ đầy):** Chọn cách hình ảnh được làm đầy (`Horizontal` - Ngang, `Vertical` - Dọc, hoặc `Radial` - Xoay vòng).
    * **Fill Start (Điểm bắt đầu):** Nơi bắt đầu vẽ (từ 0 đến 1).
    * **Fill Range (Phạm vi đổ đầy):** Bao nhiêu phần của hình ảnh hiện đang hiển thị (từ 0 đến 1).
* **Ưu điểm:** Bằng cách thay đổi `Fill Range` thông qua script (ví dụ: từ `1.0` giảm xuống `0.0`), hình ảnh sẽ mượt mà "cạn" dần đi. 
* **Áp dụng cho:**
    * **Thanh máu (Health Bars):** Sử dụng kiểu đổ đầy `Horizontal` (Ngang). Khi người chơi nhận sát thương, giảm giá trị fill range để thu hẹp thanh máu từ phải sang trái.
    * **Hồi chiêu kỹ năng (Skill Cooldowns):** Sử dụng kiểu đổ đầy `Radial` (Xoay vòng). Đặt một icon tối màu đè lên nút kỹ năng của và cho nó hiện dần theo chuyển động quét vòng tròn như kim đồng hồ cho đến khi kỹ năng sẵn sàng để sử dụng lại.
    * **Thanh tải (Loading Bars) / Thanh tiến trình (Progress Bars).**