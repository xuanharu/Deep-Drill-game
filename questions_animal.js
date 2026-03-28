const questions = [

    // Layer 1: BLUE (1-8) - SASMO cơ bản
    {
        text: "Chu vi hình chữ nhật là 48. Tổng chiều dài và chiều rộng là bao nhiêu?",
        answers: ["12", "24", "48", "96"],
        correct: 1
    },
    {
        text: "Số nào chia cho 4 dư 1 và chia cho 3 dư 1?",
        answers: ["5", "7", "9", "13"],
        correct: 3
    },
    {
        text: "Dãy số: 2, 5, 11, 23, ?",
        answers: ["35", "45", "47", "51"],
        correct: 2
    },
    {
        text: "Một số nhân 3 rồi cộng 7 được 40. Số đó là?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        text: "Có bao nhiêu số từ 1 đến 50 chia hết cho 4?",
        answers: ["11", "12", "13", "14"],
        correct: 1
    },
    {
        text: "Tổng 3 số liên tiếp là 63. Số lớn nhất là?",
        answers: ["20", "21", "22", "23"],
        correct: 2
    },
    {
        text: "Nếu 1/5 của một số là 12, số đó là?",
        answers: ["50", "55", "60", "65"],
        correct: 2
    },
    {
        text: "Một hình vuông có diện tích 81. Chu vi là?",
        answers: ["18", "27", "36", "40"],
        correct: 2
    },

    // Layer 2: GREEN (9-16) - Logic & số học
    {
        text: "Một số chia 6 dư 2, chia 4 dư 2. Số nhỏ nhất là?",
        answers: ["8", "10", "14", "20"],
        correct: 2
    },
    {
        text: "Nếu a + b = 15 và a - b = 3, thì a = ?",
        answers: ["6", "7", "8", "9"],
        correct: 3
    },
    {
        text: "Có bao nhiêu số có 2 chữ số mà tổng chữ số bằng 10?",
        answers: ["8", "9", "10", "11"],
        correct: 1
    },
    {
        text: "Dãy số: 1, 4, 10, 22, ?",
        answers: ["40", "46", "50", "52"],
        correct: 1
    },
    {
        text: "Một số nhân 4 rồi trừ 5 được 27. Số đó là?",
        answers: ["6", "7", "8", "9"],
        correct: 2
    },
    {
        text: "Có 30 học sinh, 18 thích Toán, 12 thích Văn, 6 không thích môn nào. Bao nhiêu học sinh thích cả hai?",
        answers: ["4", "5", "6", "8"],
        correct: 2
    },
    {
        text: "Tổng các số từ 1 đến 20 là?",
        answers: ["200", "210", "220", "230"],
        correct: 1
    },
    {
        text: "Một số có 2 chữ số, tổng chữ số là 9. Có bao nhiêu số như vậy?",
        answers: ["8", "9", "10", "11"],
        correct: 1
    },

    // Layer 3: ORANGE (17-24) - Suy luận SASMO
    {
        text: "Một hình chữ nhật có chiều dài hơn chiều rộng 4 đơn vị, chu vi là 28. Chiều dài là?",
        answers: ["8", "9", "10", "11"],
        correct: 0
    },
    {
        text: "Một số chia 5 dư 2, chia 7 dư 2. Số nhỏ nhất là?",
        answers: ["12", "17", "23", "37"],
        correct: 3
    },
    {
        text: "Dãy: 3, 9, 27, 81, ?",
        answers: ["162", "243", "256", "300"],
        correct: 1
    },
    {
        text: "Một tam giác có tổng 2 góc là 110°. Góc còn lại là?",
        answers: ["60°", "70°", "80°", "90°"],
        correct: 1
    },
    {
        text: "Có bao nhiêu số chia hết cho 3 từ 1 đến 99?",
        answers: ["32", "33", "34", "35"],
        correct: 1
    },
    {
        text: "Một số nhân 5 rồi trừ 15 được 35. Số đó là?",
        answers: ["8", "9", "10", "11"],
        correct: 2
    },
    {
        text: "Tổng 4 số liên tiếp là 50. Số nhỏ nhất là?",
        answers: ["10", "11", "12", "13"],
        correct: 1
    },
    {
        text: "Một hình lập phương cạnh 2. Có bao nhiêu mặt vuông nhỏ?",
        answers: ["12", "18", "24", "6"],
        correct: 2
    },

    // Layer 4: RED (25-32) - SASMO khó
    {
        text: "Một số chia 8 dư 3, chia 5 dư 3. Số nhỏ nhất là?",
        answers: ["13", "23", "33", "43"],
        correct: 1
    },
    {
        text: "Có bao nhiêu số từ 1 đến 100 có chữ số hàng đơn vị là 5?",
        answers: ["9", "10", "11", "12"],
        correct: 1
    },
    {
        text: "Tổng của các số chẵn từ 2 đến 20 là?",
        answers: ["100", "110", "120", "130"],
        correct: 1
    },
    {
        text: "Một số tăng gấp đôi rồi cộng 10 được 50. Số đó là?",
        answers: ["15", "20", "25", "30"],
        correct: 1
    },
    {
        text: "Một lớp có 40 học sinh, 25 thích Toán, 20 thích Anh, 5 không thích môn nào. Bao nhiêu học sinh thích cả hai?",
        answers: ["10", "15", "5", "20"],
        correct: 0
    },
    {
        text: "Có bao nhiêu ước của số 24?",
        answers: ["6", "7", "8", "9"],
        correct: 2
    },
    {
        text: "Một dãy tăng gấp đôi mỗi lần: 2, 4, 8,... Số thứ 7 là?",
        answers: ["64", "128", "256", "512"],
        correct: 1
    },
    {
        text: "Tổng 1 + 2 + ... + 100 = ?",
        answers: ["5000", "5050", "5100", "4950"],
        correct: 1
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}