// Import các thư viện cần thiết
const express = require('express');
const path = require('path');

// Tạo ứng dụng Express
const app = express();
const PORT = process.env.PORT || 3000; // Dùng PORT từ biến môi trường

// Cấu hình thư mục để phục vụ file tĩnh
app.use(express.static(path.join(__dirname, 'public'))); // Đường dẫn tương đối

// Cấu hình route cho trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Đường dẫn tương đối
});

// Khởi động máy chủ
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
