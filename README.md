# Cache Mode Của Component Label

Text rendering là một trong những tác vụ tốn kém nhất cho CPU và GPU. Mỗi lần thay đổi văn bản trên Label, engine sẽ phải vẽ lại những kí tự đó vào một canvas ẩn, chuyển đổi canvas đó thành texture, rồi gửi đến card đồ họa.

Để tối ưu hiệu năng, component Label bao gồm một thuộc tính Cache Mode. Nó sẽ nói cho engine biết cách văn bản được lưu trữ và tái sử dụng.

## 1. None (default)

Khi được chỉnh thành NONE, engine sẽ không thực hiện bất kỳ caching dài hạn nào. Mỗi lần chuỗi văn bản thay đổi, engine sẽ vẽ lại toàn bộ Label thành một texture riêng biệt mới hoàn toàn.

* Cách hoạt động: Vẽ văn bản theo như yêu cầu. Nêu như label này được update ở mỗi frame, engine sẽ phải phá huỷ và tạo lại một texture 60 lần mỗi giây. Điều này sẽ tăng mức sử dụng CPI và các đợt thu gom rác đột biến.

* Ứng dụng: 
    * Văn bản hiếm khi hoặc không bao giờ thay đổi khi load scene.
    * Văn bản sử dụng các hiệu ứng phức tạp không thể hiển thị tốt bởi các phương pháp caching khác.

## 2. BITMAP

Khi được chỉnh thành BITMAP, engine sẽ render toàn bộ chuỗi văn bản thành một texture và lưu (cache) nó vào bộ nhớ. Nếu một Label được tạo ra tại một nơi nào đó khác trong trò chơi mà có sử dụng chính xác văn bản, phông chữ và kích cỡ đó, engine sẽ không cần phải vẽ lại mà chia sẽ luôn texture đã được cache đó.

* Cách hoạt động: Cache toàn bộ từ hoặc câu thành một ảnh duy nhất. Nếu sử dụng lên văn bản thay đổi thường xuyên sẽ cực kỳ nguy hiểm. Khiến trò chơi nhanh chóng hao hụt bộ nhớ và crash.

* Ứng dụng: Các thành phần UI tĩnh lặp lại nhiều lần.

## 3. CHAR

Đây là phương thức tiết kiệm hiệu năng nhất cho các văn bản động. Thay vì caching toàn bộ các từ, CHAR mode chia nhỏ văn bản ra và cache từng kí tự riêng biệt vào trong một "Character Atlas" (một sprite sheet chung).

* Cách hoạt động: Chia nhỏ văn bản thành các kí tự con và cache chúng, nếu các kí tự này xuất hiện trong văn bản khác, chúng sẽ được sắp xếp lại cho đúng và tái sử dụng. Tuy nhiên, Character Atlas dùng chung này có kích thước giới hạn (thường là `2048 * 2048`). Nếu mode này được sử dụng cho các ngôn ngữ có hàng ngàn ký tự khác nhau, atlas này sẽ bị lấp đầy nhanh chóng, và engine sẽ phải liên tục lược bớt và dựng lại nó, gây lag cực lớn.

* Ứng dụng: Các con số liên tục bị thay đổi: Bộ đếm thời gian, điểm số, bộ đếm tài nguyên, và sát thương hiển thị. Ký tự La-tinh thay đổi nhanh.

# Lifecycle Trong Cocos Creator

Trong Cocos Creator, Lifecycle là một trình tự cụ thể, có thể đoán trước của các method (function) mà engine tự động gọi trong script.

Những method này không thể được gọi trực tiếp. Thay vào đó, logic sẽ được định nghĩa bên trong chúng và engine sẽ đảm bảo chúng được thực thi chính xác tại thời điểm một Node được tạo ra cho đến khi nó vĩnh viễn bị xoá khỏi bộ nhớ.

Trình tự của một Lifecycle cụ thể như sau:

## 1. Khởi Tạo (Born)

`onLoad()`: được gọi đúng 1 lần khi script được khởi tạo (thường là khi scene bắt đầu hoặc Node được sinh ra bởi `instantiate`). Dùng khi khởi tạo các biến, tìm kiếm các node khác trong hierarchy, và thiết lập trạng thái khởi tạo. Ở thời điểm này, có thể chắc chắn rằng toàn bộ node trong scene đã tồn tại.

`onEnable()`: Được gọi ngay sau `onLoad`, nhưng cũng có thể được gọi lần component hoặc Node của nó chuyển trạng thái từ inactive sang active. Dùng để đăng ký các trình lắng nghe sự kiện.

## 2. Frame Đầu Tiên (Ready)

`start()`: Được gọi một lần duy nhất, ngay trước khi script chạy frame update đầu tiên. Dùng tốt nhất cho các logic cần các script khác phải hoàn thiện chạy `onLoad`.

## 3. Vòng Lặp Trò Chơi (Living)

`update(dt: number)`: Được gọi tại từng frame. Biến dt (Delta Time) cho biết chính xác bao nhiêu mili giây đã trôi qua kể từ frame trước đó. Được sử dụng cho chuyển động của nhân vật, vật thể, bộ đếm thời gian đang chạy hoặc liên tục kiểm tra input.

`lateUpdate(dt: number)`: Cũng được gọi tại từng frame, nhưng bắt buộc phải sau tất cả các update trong toàn bộ trò chơi đã hoàn thành. Dùng cho Camera. Nếu nhân vật di chuyển trong `update`, camera được di chuyển trong `lateUpdate` để bảo đảm rằng nó không vô tình di chuyển trước người chơi.

## 4. Dọn Dẹp (Dying)

`onDisable()`: Trái với `onEnable`, nó được gọi mỗi lần component hoặc Node của nó chuyển trạng thái sang deactivated. Dùng để hủy đăng ký các trình lắng nghe sự kiện.

`onDestroy()`: Được gọi đúng một lần trước khi Node bị xoá vĩnh viễn khỏi RAM. Dùng để thực hiện các tác vụ dọn dẹp cuối cùng.