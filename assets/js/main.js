const text = "HỆ THỐNG HỌC TẬP VÀ GIẢNG\n DẠY TRỰC TUYẾN";
const speed = 100; // Tốc độ đánh chữ (thời gian mili giây)

let index = 0;
const typedTextElement = document.querySelector(".banner__title");

function typeText() {
    if (index < text.length) {
        if (text.charAt(index) === "\n") {
            typedTextElement.innerHTML += "<br>"; // Thêm thẻ <br> cho xuống dòng
        } else {
            typedTextElement.innerHTML += text.charAt(index);
        }
        index++;
        setTimeout(typeText, speed); // Thay đổi thời gian delay ở đây
    }
}

typeText();
