// 32 Fun & Logic Questions (Nhanh như chớp style)
const questions = [

    // Layer 1: BLUE (1-8) - Dễ, vui, phản xạ nhanh
    {
        text: "Con gì càng rửa càng bẩn?",
        answers: ["Con mèo", "Con chó", "Nước", "Cái khăn"],
        correct: 3
    },
    {
        text: "Cái gì càng lấy ra thì càng lớn?",
        answers: ["Cái túi", "Cái hố", "Cái hộp", "Cái bàn"],
        correct: 1
    },
    {
        text: "Một tuần có mấy ngày Chủ nhật?",
        answers: ["1", "2", "7", "0"],
        correct: 2
    },
    {
        text: "Cái gì có cổ nhưng không có đầu?",
        answers: ["Áo", "Chai nước", "Cái bàn", "Cái ghế"],
        correct: 1
    },
    {
        text: "3 con mèo bắt 3 con chuột trong 3 phút. 1 con mèo bắt 1 con chuột mất bao lâu?",
        answers: ["1 phút", "2 phút", "3 phút", "9 phút"],
        correct: 2
    },
    {
        text: "Cái gì luôn đi lên nhưng không bao giờ đi xuống?",
        answers: ["Tuổi", "Bóng bay", "Máy bay", "Mặt trời"],
        correct: 0
    },
    {
        text: "Có 5 con chim, bắn rơi 2 con, còn lại mấy con?",
        answers: ["3", "2", "0", "5"],
        correct: 2
    },
    {
        text: "Cái gì có răng nhưng không ăn được?",
        answers: ["Con chó", "Cái lược", "Cái kéo", "Cái bàn"],
        correct: 1
    },

    // Layer 2: GREEN (9-16) - Logic nhẹ
    {
        text: "Bạn có 10 quả táo, cho đi 3 quả. Bạn còn bao nhiêu quả?",
        answers: ["7", "3", "10", "13"],
        correct: 2
    },
    {
        text: "Một đàn vịt có 10 con, 2 con đi mất. Hỏi còn mấy con?",
        answers: ["8", "10", "2", "12"],
        correct: 0
    },
    {
        text: "Số nào đứng sau 19 nhưng trước 21?",
        answers: ["18", "20", "22", "19"],
        correct: 1
    },
    {
        text: "Nếu hôm nay là thứ 2, thì 3 ngày nữa là thứ mấy?",
        answers: ["Thứ 4", "Thứ 5", "Thứ 6", "Chủ nhật"],
        correct: 1
    },
    {
        text: "Con gì có 4 chân buổi sáng, 2 chân buổi trưa, 3 chân buổi tối?",
        answers: ["Con mèo", "Con người", "Con chó", "Con chim"],
        correct: 1
    },
    {
        text: "Một cái bánh cắt 3 lần thì được tối đa mấy phần?",
        answers: ["4", "6", "7", "8"],
        correct: 2
    },
    {
        text: "Cái gì đập thì sống, không đập thì chết?",
        answers: ["Tim", "Trống", "Nước", "Lửa"],
        correct: 0
    },
    {
        text: "Số lớn nhất có 1 chữ số là?",
        answers: ["8", "9", "10", "11"],
        correct: 1
    },

    // Layer 3: ORANGE (17-24) - Tư duy nhanh
    {
        text: "Có 2 người đào 1 cái hố trong 2 giờ. Hỏi 1 người đào 1 cái hố mất bao lâu?",
        answers: ["1 giờ", "2 giờ", "4 giờ", "Không xác định"],
        correct: 1
    },
    {
        text: "Một chiếc xe đi 60km trong 1 giờ. 2 giờ đi được bao nhiêu km?",
        answers: ["60", "100", "120", "180"],
        correct: 2
    },
    {
        text: "Cái gì càng chạy thì càng đứng yên?",
        answers: ["Xe", "Đồng hồ", "Người", "Máy bay"],
        correct: 1
    },
    {
        text: "Một số nhân 2 rồi cộng 2 bằng 10. Số đó là?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        text: "Nếu bạn có 3 cái kẹo và ăn hết 3 cái, bạn còn mấy cái?",
        answers: ["0", "1", "2", "3"],
        correct: 0
    },
    {
        text: "Cái gì có mắt mà không thấy?",
        answers: ["Kim", "Bão", "Cả hai", "Không cái nào"],
        correct: 2
    },
    {
        text: "Một năm có bao nhiêu tháng có 28 ngày?",
        answers: ["1", "2", "12", "6"],
        correct: 2
    },
    {
        text: "Có 3 quả táo, lấy đi 2 quả. Bạn có mấy quả?",
        answers: ["1", "2", "3", "0"],
        correct: 1
    },

    // Layer 4: RED (25-32) - Lừa não nhẹ
    {
        text: "Cái gì càng khô càng ướt?",
        answers: ["Khăn", "Nước", "Áo", "Giấy"],
        correct: 0
    },
    {
        text: "Bạn đứng trước gương, giơ tay phải. Trong gương giơ tay nào?",
        answers: ["Tay phải", "Tay trái", "Cả hai", "Không tay nào"],
        correct: 1
    },
    {
        text: "Một người có 3 đứa con, mỗi đứa có 1 chị gái. Hỏi có mấy người con?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        text: "Nếu 5 con gà đẻ 5 trứng trong 5 ngày, 1 con gà đẻ 1 trứng trong bao lâu?",
        answers: ["1 ngày", "5 ngày", "10 ngày", "Không xác định"],
        correct: 0
    },
    {
        text: "Cái gì có thể bay mà không có cánh?",
        answers: ["Máy bay", "Thời gian", "Chim", "Gió"],
        correct: 1
    },
    {
        text: "Có 10 cây nến, thổi tắt 3 cây. Hỏi còn mấy cây?",
        answers: ["7", "3", "10", "0"],
        correct: 1
    },
    {
        text: "Cái gì càng nhiều càng nhẹ?",
        answers: ["Nước", "Không khí", "Lông vũ", "Gió"],
        correct: 2
    },
    {
        text: "Một người đi mưa không mang ô, không đội mũ, tại sao tóc không ướt?",
        answers: ["Mưa nhỏ", "Người hói", "Có áo mưa", "Đứng dưới mái"],
        correct: 1
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}