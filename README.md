## 1. Singleton (Khởi tạo duy nhất)
* **Khái niệm:** Đảm bảo một lớp (class) chỉ có duy nhất một thực thể (instance) trong suốt vòng đời ứng dụng và cung cấp một điểm truy cập toàn cục.
* **Cách dùng:** Tạo một biến tĩnh (`static`) lưu trữ thực thể của chính lớp đó và đặt hàm khởi tạo là `private`.
* **Ứng dụng:** * `GameManager`: Quản lý logic chính của game.
    * `AudioManager`: Quản lý âm thanh và nhạc nền.
    * `ResourceLoader`: Quản lý việc tải tài nguyên.

## 2. State (Máy trạng thái)
* **Khái niệm:** Cho phép một đối tượng thay đổi hành vi khi trạng thái nội bộ của nó thay đổi. Đối tượng sẽ trông như thể nó đã thay đổi lớp của mình.
* **Cách dùng:** Chia các trạng thái thành các lớp riêng biệt thực thi cùng một interface hoặc kế thừa từ một lớp trừu tượng.
* **Ứng dụng:** * Trạng thái nhân vật: Đứng yên (Idle), Chạy (Running), Nhảy (Jumping), Chết (Dying).
    * Trạng thái AI: Tuần tra (Patrol), Đuổi theo (Chase), Tấn công (Attack).

## 3. Observer (Người quan sát / Sự kiện)
* **Khái niệm:** Định nghĩa mối quan hệ phụ thuộc một-nhiều giữa các đối tượng để khi một đối tượng thay đổi trạng thái, tất cả các thành phần phụ thuộc sẽ được thông báo.
* **Cách dùng:** Sử dụng cơ chế Event/Delegate (C#) hoặc Signals.
* **Ứng dụng:** * Hệ thống UI: Cập nhật thanh máu khi nhân vật nhận sát thương.
    * Hệ thống Thành tựu (Achievements): Mở khóa danh hiệu khi đạt số điểm nhất định.
    * Âm thanh: Phát tiếng nổ khi một vật thể bị phá hủy.

## 4. Component (Thành phần)
* **Khái niệm:** Cho phép một thực thể duy nhất trải rộng trên nhiều cột logic mà không tạo ra sự ràng buộc chặt chẽ. Thay vì kế thừa, ta sử dụng "composition" (hợp thành).
* **Cách dùng:** Một thực thể (Entity) là một tập hợp các thành phần (Components) độc lập.
* **Ứng dụng:** * Kiến trúc ECS (Entity Component System).
    * Trong Cocos: Một GameObject có thể có BoxCollider, và Script tùy chỉnh.

## 5. Object Pool (Lưu trữ đối tượng)
* **Khái niệm:** Tối ưu hóa hiệu suất bằng cách tái sử dụng các đối tượng thay vì khởi tạo và hủy chúng liên tục, giúp giảm áp lực cho Garbage Collector.
* **Cách dùng:** Tạo một danh sách các đối tượng sẵn có. Khi cần dùng thì lấy ra (Activate), dùng xong thì trả lại (Deactivate).
* **Ứng dụng:** * Đạn (Bullets) trong game bắn súng.
    * Các hiệu ứng hạt (Particle Systems).
    * Kẻ thù xuất hiện theo đợt (Spawn enemies).

## 6. Command (Lệnh)
* **Khái niệm:** Đóng gói một yêu cầu như một đối tượng, cho phép tham số hóa các phương thức, hàng đợi yêu cầu và hỗ trợ các thao tác có thể hoàn tác.
* **Cách dùng:** Tạo lớp Command chứa logic thực thi và dữ liệu cần thiết.
* **Ứng dụng:** * Hệ thống phím bấm có thể cấu hình lại (Input Remapping).
    * Tính năng Undo/Redo (Hoàn tác).
    * Ghi lại trận đấu (Replay system).

---

## Lợi ích của việc áp dụng Design Patterns
1. **Tính bảo trì:** Mã nguồn sạch sẽ, dễ đọc và dễ sửa lỗi.
2. **Khả năng mở rộng:** Dễ dàng thêm tính năng mới mà không làm ảnh hưởng đến hệ thống hiện có.
3. **Hiệu suất:** Tối ưu hóa việc sử dụng bộ nhớ và CPU.
4. **Làm việc nhóm:** Tạo ra một ngôn ngữ chung giữa các lập trình viên.