# Hệ toạ độ

## Sử dụng trong Cocos:
### Hệ toạ độ Đề-các.

Cocos Creator được xây dựng từ đầu để trở thành một engine đa nền tảng với trọng tâm lớn vào web và thiết bị di động. API đồ họa native cho các trình duyệt web là WebGL (dựa trên OpenGL). Về bản chất, OpenGL sử dụng hệ tọa độ thuận tay phải và trục Y hướng lên. Bằng cách áp dụng chính xác hệ thống của trình kết xuất phần cứng nền tảng, Cocos tránh được việc phải thực hiện thêm các phép tính toán học ngầm để lật tọa độ trong mỗi khung hình. Điều này trực tiếp mang lại hiệu suất tốt hơn.

Hệ toạ độ trong Cocos Creator được bắt nguồn từ hệ toạ độ Đề-các. Trong hệ toạ độ Đề-các, góc nằm dưới cùng phía bên trái được xem là gốc toạ độ, trục X đi từ trái sang phải, trục Y đi từ dưới lên trên, trục Z đi từ trong ra ngoài. Hệ toạ độ này còn được gọi là hệ toạ độ Đề-các thuận phải.

### Hệ toạ độ thế giới và hệ toạ độ cục bộ.
Hệ toạ độ thế giới còn được gọi là hệ toạ độ tuyệt đối. Đây là hệ tọa độ thống nhất để hiển thị không gian cảnh trong quá trình phát triển trò chơi bằng Cocos Creator. 「Thế giới」 ở đây được dùng để chỉ cảnh (scene) trong trò chơi.
Hệ toạ độ cục bộ hay còn được gọi là hệ toạ độ tương đối và liên quan tới các nút. Mỗi nút có một hệ toạ độ độc nhất, vậy nên khi nút di chuyển hay đổi hướng, hệ toạ độ liên quan tới nút này cũng sẽ thay đổi theo.
### Điểm neo.
Điểm neo là một thuộc tính quan trọng của nút. Nó quy định điểm nào trong khung giới hạn của bản thân nút đó sẽ được coi là vị trí của toàn bộ nút. Điểm neo được biểu diễn bởi `anchorX` và `anchorY`, là hệ số nhân trong khoảng từ 0 đến 1. Vị trí cụ thể của điểm neo trong khung giới hạn của nút được tính bằng công thức: `x = anchorX * width` và `y = anchorY * height`.
### Hệ toạ độ của nút con.
Một khi điểm neo đã được xác định, tất cả nút sẽ lấy vị trí điểm neo để làm gốc toạ độ.
Khi trong cảnh chứa các nút thuộc các nhánh thứ bậc khác nhau, cần phải tuân theo những quy tắc sau khi xác định vị trí của từng nút trong hệ toạ độ thế giới:
* Điểm bắt đầu là nút gốc của cảnh.
* Xử lý toàn bộ nút con của nút được chọn hiện tại.
* Xử lý theo thứ tự từ bậc cao đến bậc thấp. Mỗi nút nên dựa vào toạ độ của nút cha và toạ độ điểm neo của bản thân để xác định vị trí của nó trong không gian cảnh.

## Khác
## Hệ toạ độ màn hình.
Hệ toạ độ được sử dụng trong quá trình phát triển ứng dụng với các SDK native trên iOS, Android và các nền tảng khác là hệ toạ độ màn hình chuẩn. Gốc toạ độ nằm ở góc trái trên màn hình, x đi từ trái sang phải, y đi từ trên xuống dưới.