const questions = [

    // Layer 1: BLUE (1-8) - Cơ bản
    {
        text: "Dầu thô chủ yếu được cấu tạo từ thành phần nào?",
        answers: ["Nước", "Hydrocarbon", "Oxy", "Nitơ"],
        correct: 1
    },
    {
        text: "Quá trình nào dùng để tách dầu thô thành các sản phẩm khác nhau?",
        answers: ["Lọc", "Chưng cất phân đoạn", "Bay hơi", "Ngưng tụ"],
        correct: 1
    },
    {
        text: "Đơn vị phổ biến để đo sản lượng dầu là gì?",
        answers: ["Lít", "Tấn", "Thùng (barrel)", "Mét khối"],
        correct: 2
    },
    {
        text: "Dầu khí thường được khai thác từ đâu?",
        answers: ["Trên mặt đất", "Trong lòng đất và đá trầm tích", "Trong không khí", "Trong nước ngọt"],
        correct: 1
    },
    {
        text: "Sản phẩm phổ biến nhất từ dầu mỏ là gì?",
        answers: ["Thực phẩm", "Nhiên liệu", "Kim loại", "Gỗ"],
        correct: 1
    },
    {
        text: "Giàn khoan dầu khí dùng để làm gì?",
        answers: ["Tinh chế dầu", "Khoan và khai thác dầu", "Vận chuyển dầu", "Lưu trữ dầu"],
        correct: 1
    },
    {
        text: "Khí nào thường đi kèm với mỏ dầu?",
        answers: ["Oxy", "Khí tự nhiên", "CO2", "Helium"],
        correct: 1
    },
    {
        text: "Dầu thô thường có màu gì?",
        answers: ["Trong suốt", "Xanh", "Nâu đậm hoặc đen", "Trắng"],
        correct: 2
    },

    // Layer 2: GREEN (9-16) - Môi trường & quy trình
    {
        text: "Tác động môi trường lớn nhất của khai thác dầu khí là gì?",
        answers: ["Tiếng ồn", "Tràn dầu", "Ánh sáng", "Độ ẩm"],
        correct: 1
    },
    {
        text: "Hiệu ứng nhà kính chủ yếu do khí nào từ việc đốt dầu?",
        answers: ["O2", "CO2", "N2", "H2"],
        correct: 1
    },
    {
        text: "Thuật ngữ 'upstream' trong dầu khí nghĩa là gì?",
        answers: ["Phân phối", "Thăm dò và khai thác", "Tinh chế", "Marketing"],
        correct: 1
    },
    {
        text: "Khai thác dầu ngoài khơi thường gặp rủi ro gì?",
        answers: ["Bão và sóng lớn", "Nắng nóng", "Thiếu ánh sáng", "Thiếu oxy"],
        correct: 0
    },
    {
        text: "Công nghệ nào giúp tìm kiếm mỏ dầu dưới lòng đất?",
        answers: ["Radar", "Khảo sát địa chấn", "Camera nhiệt", "GPS"],
        correct: 1
    },
    {
        text: "Một thùng dầu tương đương bao nhiêu gallon?",
        answers: ["30", "42", "50", "100"],
        correct: 1
    },
    {
        text: "Khai thác dầu sâu dưới biển gọi là gì?",
        answers: ["Khoan nông", "Khoan sâu ngoài khơi", "Khoan đất liền", "Khoan núi"],
        correct: 1
    },
    {
        text: "Tràn dầu ảnh hưởng trực tiếp đến hệ sinh thái nào?",
        answers: ["Rừng", "Sa mạc", "Biển và sinh vật biển", "Núi"],
        correct: 2
    },

    // Layer 3: ORANGE (17-24) - Tổ chức, thuật ngữ, tác động
    {
        text: "OPEC là tổ chức gì?",
        answers: [
            "Tổ chức xuất khẩu dầu mỏ",
            "Công ty dầu khí",
            "Tổ chức môi trường",
            "Ngân hàng năng lượng"
        ],
        correct: 0
    },
    {
        text: "Hiệp định Paris 2015 liên quan đến điều gì?",
        answers: [
            "Chiến tranh",
            "Biến đổi khí hậu",
            "Giá dầu",
            "Thương mại"
        ],
        correct: 1
    },
    {
        text: "Thuật ngữ 'proven reserves' nghĩa là gì?",
        answers: [
            "Tổng trữ lượng",
            "Trữ lượng đã xác minh có thể khai thác",
            "Trữ lượng giả định",
            "Trữ lượng tương lai"
        ],
        correct: 1
    },
    {
        text: "Khai thác dầu ảnh hưởng gì đến biến đổi khí hậu?",
        answers: [
            "Không ảnh hưởng",
            "Làm tăng phát thải CO2",
            "Giảm nhiệt độ",
            "Tạo oxy"
        ],
        correct: 1
    },
    {
        text: "Công nghệ fracking là gì?",
        answers: [
            "Chưng cất",
            "Nứt vỉa thủy lực",
            "Lọc dầu",
            "Đốt dầu"
        ],
        correct: 1
    },
    {
        text: "Sự cố Deepwater Horizon năm 2010 là gì?",
        answers: [
            "Cháy rừng",
            "Tràn dầu lớn",
            "Động đất",
            "Bão"
        ],
        correct: 1
    },
    {
        text: "Dầu khí đóng vai trò gì trong nền kinh tế?",
        answers: [
            "Không quan trọng",
            "Nguồn năng lượng chính",
            "Chỉ dùng cho công nghiệp nhỏ",
            "Chỉ dùng cho quân sự"
        ],
        correct: 1
    },
    {
        text: "Nguồn năng lượng thay thế dầu khí là gì?",
        answers: [
            "Than",
            "Năng lượng mặt trời",
            "Khí đốt",
            "Dầu diesel"
        ],
        correct: 1
    },

    // Layer 4: RED (25-32) - Nâng cao & giải pháp
    {
        text: "Giải pháp nào giúp giảm tác động môi trường của dầu khí?",
        answers: [
            "Tăng khai thác",
            "Công nghệ sạch và kiểm soát rò rỉ",
            "Đốt nhiều hơn",
            "Giảm giám sát"
        ],
        correct: 1
    },
    {
        text: "Thuật ngữ 'carbon capture' nghĩa là gì?",
        answers: [
            "Tạo CO2",
            "Thu giữ CO2",
            "Đốt CO2",
            "Loại bỏ oxy"
        ],
        correct: 1
    },
    {
        text: "Ngành dầu khí gặp khó khăn lớn nhất hiện nay là gì?",
        answers: [
            "Thiếu lao động",
            "Áp lực môi trường và chuyển dịch năng lượng",
            "Thiếu máy móc",
            "Thiếu nước"
        ],
        correct: 1
    },
    {
        text: "Tại sao khai thác dầu sâu nguy hiểm hơn?",
        answers: [
            "Dễ khai thác hơn",
            "Áp suất cao và khó kiểm soát",
            "Ít dầu hơn",
            "Không có rủi ro"
        ],
        correct: 1
    },
    {
        text: "Peak oil là gì?",
        answers: [
            "Giá cao nhất",
            "Đỉnh sản lượng dầu",
            "Chất lượng tốt nhất",
            "Độ sâu lớn nhất"
        ],
        correct: 1
    },
    {
        text: "Một cách giảm phụ thuộc vào dầu khí là gì?",
        answers: [
            "Tăng tiêu thụ",
            "Sử dụng năng lượng tái tạo",
            "Đốt nhiều hơn",
            "Xuất khẩu nhiều hơn"
        ],
        correct: 1
    },
    {
        text: "Ngành dầu khí ảnh hưởng đến đại dương như thế nào?",
        answers: [
            "Không ảnh hưởng",
            "Gây ô nhiễm và phá hủy hệ sinh thái",
            "Tạo thêm sinh vật",
            "Làm nước sạch hơn"
        ],
        correct: 1
    },
    {
        text: "Tương lai ngành dầu khí sẽ như thế nào?",
        answers: [
            "Tăng vô hạn",
            "Giảm dần và chuyển sang năng lượng sạch",
            "Không thay đổi",
            "Biến mất ngay lập tức"
        ],
        correct: 1
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}