const EVENT_CARDS = [{
        title: "Phát triển ổn định",
        image: "https://www.sdc.com.vn/Data/Sites/1/News/39/group-106.jpg",
        description: "Hình ảnh dàn khoan Vietsovpetro liên doanh Việt-Nga, khai thác dầu khí trên biển Đông.",
        effect: {
            type: "none"
        }
    },
    {
        title: "Bùng nổ năng lượng tái tạo (2021)",
        image: "https://sunemit.com/wp-content/uploads/2023/05/quy-hoach-dien-viii.jpg",
        description: "Đầu tư mạnh vào năng lượng sạch, kĩ thuật lọc hóa dầu.",
        effect: {
            type: "environment",
            value: +3
        }
    },
    {
        title: "Phát triển CCS – thu giữ carbon (2020s)",
        image: "https://baoquocte.vn/stores/news_dataimages/2023/112023/17/14/bat-carbon-phuc-vu-hanh-tinh-xanh-20231117143008.jpg?rt=20231117143013",
        description: "Công nghệ thu giữ CO2 giúp giảm tác động môi trường của ngành dầu khí.",
        effect: {
            type: "environment",
            value: +2
        }
    },
    {
        title: "Sự cố Exxon Valdez (1989)",
        image: "https://assets.editorial.aetnd.com/uploads/2018/03/exxon-valdez-oil-spill-gettyimages-542342318.jpg",
        description: "Tàu chở dầu Exxon Valdez tràn dầu tại Alaska, gây thiệt hại lớn đến hệ sinh thái biển.",
        effect: {
            type: "environment",
            value: -2
        }
    },
    {
        title: "Chiến tranh Vùng Vịnh (1990–1991)",
        image: "https://nghiencuulichsu.com/wp-content/uploads/2014/04/kuwait_burn_oilfield11.jpg?w=1200",
        description: "Chiến tranh tại Kuwait khiến hàng trăm giếng dầu bị đốt cháy, gây ô nhiễm nghiêm trọng.",
        effect: {
            type: "environment",
            value: -3
        }
    },
    {
        title: "Sự cố tràn dầu Deepwater Horizon (2010)",
        image: "http://darkroom.baltimoresun.com/wp-content/uploads/2012/11/CT-SC-NW-AJ-1-OIL-0920.jpg",
        description: "Giàn khoan phát nổ tại Vịnh Mexico, 2,5 triệu lít dầu loang, 54 tỉ USD bồi thường và 15 năm vẫn chưa hết hậu quả.",
        effect: {
            type: "environment",
            value: -3
        }
    },
    {
        title: "Sóng thần Touhoku (2011)",
        image: "https://nipiko.com/wp-content/uploads/2021/03/2_kyodoap.jpg",
        description: "Sóng thần phá hủy cơ sở hạ tầng ven biển, gây phá hủy 6 giàn khoan & cơ sở sản xuất dầu.",
        effect: {
            type: "position",
            team: "all",
            value: +4
        }
    },
    {
        title: "Công nghệ fracking bùng nổ (2010s)",
        image: "https://nangluongvietnam.vn/stores/news_dataimages/Tongbientap/122014/18/11/Fracking-Hydraulic-Fracturing.jpg?randTime=1766010110",
        description: "Khai thác dầu đá phiến giúp Mỹ trở thành nhà sản xuất lớn.",
        effect: {
            type: "position",
            team: "all",
            value: +2
        }
    },
    {
        title: "Quốc hữu hóa dầu mỏ Venezuela (1976)",
        image: "https://static.fireant.vn/posts/image/2452690?width=800&height=600",
        description: "Venezuela quốc hữu hóa ngành dầu khí, tăng kiểm soát nhà nước nhưng giảm đầu tư nước ngoài. Đây cũng là đất nước có trữ lượng dầu lớn nhất thế giới.",
        effect: {
            type: "position",
            team: "all",
            value: +1
        }
    },
    {
        title: "Khủng hoảng dầu mỏ OPEC (1973)",
        image: "http://nghiencuuquocte.org/wp-content/uploads/2016/10/17.10.1973-OPEC-states-declare-oil-embargo.jpg",
        description: "Năm 1973, OPEC cắt giảm sản lượng để phản đối phương Tây, khiến giá dầu tăng mạnh toàn cầu.",
        effect: {
            type: "position",
            team: "all",
            value: -1
        }
    },
    {
        title: "Bùng nổ năng lượng tái tạo (2021)",
        image: "https://sunemit.com/wp-content/uploads/2023/05/quy-hoach-dien-viii.jpg",
        description: "Đầu tư mạnh vào năng lượng sạch làm giảm nhu cầu dầu.",
        effect: {
            type: "position",
            team: "all",
            value: -2
        }
    },
    {
        title: "Đóng cửa kênh đào Suez (2021)",
        image: "https://photo2.tinhte.vn/data/attachment-files/2021/05/5465896_kenh-dao-suez-3.jpg",
        description: "Tàu Ever Given chặn kênh đào Suez, làm gián đoạn vận chuyển dầu.",
        effect: {
            type: "position",
            team: "all",
            value: -2
        }
    },
    {
        title: "Hiệp định Paris về chống biến đổi khí hậu (2015)",
        image: "https://cand.com.vn/Files/Image/linhchi/2017/06/04/2177cf4f-f317-43dc-a754-71d9755dde02.jpg",
        description: "Các quốc gia cam kết giảm phát thải CO2, gây áp lực lên ngành dầu khí phải giảm trữ lượng.",
        effect: {
            type: "position",
            team: "all",
            value: -3
        }
    },
    {
        title: "Hư hỏng thiết bị",
        image: "https://duafat.com.vn/wp-content/uploads/2020/05/DSC8799.jpg",
        description: "Thiết bị khoan gặp sự cố, phải đưa về để sửa chữa.",
        effect: {
            type: "position",
            team: "A",
            value: -2
        }
    },
    {
        title: "Lệnh trừng phạt Iran (2018)",
        image: "https://ichef.bbci.co.uk/images/ic/1024x576/p094p31f.jpg",
        description: "Xuất khẩu dầu Iran bị hạn chế, làm giảm nguồn cung toàn cầu.",
        effect: {
            type: "position",
            team: "B",
            value: -2
        }
    },
    {
        title: "Tăng thuế khai thác dầu khí",
        image: "https://tse1.mm.bing.net/th/id/OIP.45_3YJKnDQDXuVBQQjZtKQHaEK?pid=Api&P=0&h=180",
        description: "Chính phủ áp dụng mức thuế mới khiến chi phí vận hành của Team C tăng cao. Hình ảnh khai thác dầu ở mỏ Bạch Hổ.",
        effect: {
            type: "position",
            team: "C",
            value: -2
        }
    },
    {
        title: "Trì hoãn cấp phép khai thác",
        image: "https://nld.mediacdn.vn/2014/Dankhoan981-6385d.jpg",
        description: "Các thủ tục pháp lý kéo dài khiến Team D không thể tiếp tục khai thác đúng tiến độ. Hình ảnh giàn khoan Dân Khoan 981 tại Quần đảo Hoàng Sa.",
        effect: {
            type: "position",
            team: "D",
            value: -2
        }
    },
    {
        title: "Thiếu hụt nhân lực kỹ thuật",
        image: "https://tse2.mm.bing.net/th/id/OIP.cbbziY23ISRUGjfxCdbPWwHaET?pid=Api&P=0&h=180",
        description: "Thiếu kỹ sư và công nhân lành nghề khiến hoạt động khai thác của Team E bị chậm lại.",
        effect: {
            type: "position",
            team: "E",
            value: -2
        }
    },
    {
        title: "OPEC cắt giảm sản lượng (2016)",
        image: "https://casestudypaper.com/wp-content/uploads/2022/09/213508-opec-thao-luan-ve-viec-tang-san-luong-dau-tho.jpg",
        description: "OPEC quyết định giảm sản lượng để ổn định giá dầu.",
        effect: {
            type: "removeOil",
            team: "all",
            count: 1
        }
    },
    {
        title: "Sự cố tràn dầu Nigeria (2011)",
        image: "https://sosmoitruong.edubit.vn/data/sites/6001008a06ed3f2e6d75c764/files/1508363888emergencyresponse1.jpg",
        description: "Một trong những khu vực bị ô nhiễm dầu nặng nhất thế giới.",
        effect: {
            type: "removeOil",
            team: "all",
            count: 1
        }
    },

];