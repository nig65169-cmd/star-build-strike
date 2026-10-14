export interface GunplaGrade {
  id: string;
  code: string;
  name: string;
  scale: string;
  avgHeight: string;
  difficulty: number; // 1 - 5
  innerFrame: string;
  partCount: string;
  buildTime: string;
  priceRefVND: string;
  targetAudience: string;
  pros: string[];
  cons: string[];
  description: string;
  iconTag: string;
  recommendedKits: string[];
  badgeColor: string;
}

export const GUNPLA_GRADES: GunplaGrade[] = [
  {
    id: "entry-grade",
    code: "EG",
    name: "Entry Grade",
    scale: "1/144",
    avgHeight: "~13 cm",
    difficulty: 1,
    innerFrame: "Không có",
    partCount: "60 - 80 chi tiết",
    buildTime: "30 - 45 phút",
    priceRefVND: "180.000 - 250.000 VNĐ",
    targetAudience: "Người mới tinh chưa từng chơi, trẻ em, người muốn tập sơn thử nghiệm nhanh",
    pros: [
      "Không cần dùng kìm (Touch gate: bẻ chi tiết bằng tay không để lại vết sứt lớn)",
      "Không cần keo dán, không cần decal tem dán mắt (chia màu nhựa tinh xảo ở phần đầu)",
      "Biên độ cử động vượt trội so với mức giá",
      "Giá thành rẻ nhất phân khúc chính hãng Bandai"
    ],
    cons: [
      "Số lượng mẫu mã còn ít (chủ yếu RX-78-2, Strike, Nu, Lah Gundam)",
      "Chi tiết bề mặt đơn giản, không có khung xương",
      "Khớp bi nhựa dẻo có thể nhanh lỏng sau thời gian dài tạo dáng"
    ],
    description: "Dòng Gunpla thế hệ mới mang tính cách mạng của Bandai dành cho người mới bước chân vào bộ môn. Điểm độc đáo nhất là công nghệ Touch-Gate cho phép bạn tháo rời từng part khỏi runner chỉ bằng ngón tay mà không cần kìm chuyên dụng. Dù ít mảnh, thiết kế phân tách màu mắt và mặt của EG đạt độ chuẩn xác đáng kinh ngạc.",
    iconTag: "DỄ NHẤT · CHO NEWBIE",
    recommendedKits: ["EG 1/144 RX-78-2 Gundam", "EG 1/144 Strike Gundam", "EG 1/144 Nu Gundam"],
    badgeColor: "#10b981"
  },
  {
    id: "high-grade",
    code: "HG",
    name: "High Grade (HG 1/144)",
    scale: "1/144",
    avgHeight: "~13 - 15 cm",
    difficulty: 2,
    innerFrame: "Một phần (Dòng IBO/WFM có khung bán phần)",
    partCount: "120 - 200 chi tiết",
    buildTime: "1.5 - 3 giờ",
    priceRefVND: "300.000 - 750.000 VNĐ",
    targetAudience: "Người mới, người sưu tầm số lượng lớn, builder thích custom và kitbash",
    pros: [
      "Hệ sinh thái phong phú nhất lịch sử Gunpla (hàng trăm mẫu từ mọi vũ trụ anime)",
      "Mức giá hợp túi tiền, dễ tiếp cận và trưng bày gọn gàng",
      "Dễ lắp, độ hoàn thiện cao, khớp nối bền bỉ",
      "Không tốn diện tích tủ kính, phụ kiện phong phú"
    ],
    cons: [
      "Vẫn phụ thuộc một số sticker dán giấy ở các chi tiết nhỏ",
      "Đa số không có khung xương bên trong hoàn chỉnh",
      "Cần kẻ lằn panel line để đạt vẻ đẹp tối ưu"
    ],
    description: "Trụ cột vững chắc nhất của thế giới Gunpla từ năm 1990 đến nay. Tỷ lệ 1/144 nhỏ gọn giúp bạn dễ dàng sở hữu cả một đội quân Mobile Suit mà không lo 'cháy túi' hay chật nhà. Các dòng HG hiện đại (như HG The Witch from Mercury, HGCE, HGUC Revive) áp dụng công nghệ đúc đa sắc tinh vi, biên độ pose dáng cực kỳ linh hoạt.",
    iconTag: "PHỔ BIẾN NHẤT · BỘ SƯU TẬP KHỔNG LỒ",
    recommendedKits: ["HGUC 1/144 Moon Gundam", "HG WFM 1/144 Gundam Aerial", "HGUC 1/144 RX-78-2 Revive", "HGCE 1/144 Destiny Gundam"],
    badgeColor: "#0284c7"
  },
  {
    id: "real-grade",
    code: "RG",
    name: "Real Grade (RG 1/144)",
    scale: "1/144",
    avgHeight: "~13 - 16 cm",
    difficulty: 4,
    innerFrame: "Toàn bộ (Advanced MS Joint hoặc Khung ráp khối)",
    partCount: "250 - 450 chi tiết",
    buildTime: "6 - 12 giờ",
    priceRefVND: "650.000 - 1.250.000 VNĐ",
    targetAudience: "Người thích chi tiết cơ khí tinh xảo, builder cẩn thận, yêu thích tỉ lệ nhỏ",
    pros: [
      "Mức độ chi tiết bề mặt và tách mảng màu giáp đỉnh cao hàng đầu",
      "Khung xương inner frame đầy đủ ở tỉ lệ nhỏ 1/144",
      "Tập decal tem kỹ thuật Realistic Decal phong phú đi kèm",
      "Các mẫu từ đời RG #25 trở đi (Sazabi, Nu, Hi-Nu, God, RX-78-2 2.0) là kiệt tác kỹ thuật"
    ],
    cons: [
      "Chi tiết siêu nhỏ, dễ gãy hoặc bắn mất nếu thao tác bất cẩn",
      "Các mẫu RG đời đầu (RG RX-78-2 cũ, Zeta, Sinanju) có khớp Advanced MS Joint dễ lỏng hoặc giòn",
      "Đòi hỏi kìm cắt xịn và tính kiên nhẫn cao"
    ],
    description: "Slogan của dòng RG là 'The Real Thing in 1/144 Scale' (Cỗ máy chân thực ở tỷ lệ nhỏ). Bạn sẽ được trải nghiệm cảm giác lắp ráp một Mobile Suit thực thụ với khung xương kim loại mô phỏng, các mảng giáp trượt mở theo chuyển động cơ bắp, và hệ thống ống xả động cơ phức tạp thu nhỏ trong lòng bàn tay.",
    iconTag: "CHI TIẾT ĐỈNH CAO 1/144",
    recommendedKits: ["RG 1/144 RX-93 Nu Gundam", "RG 1/144 Hi-Nu Gundam", "RG 1/144 MSN-04 Sazabi", "RG 1/144 God Gundam"],
    badgeColor: "#8b5cf6"
  },
  {
    id: "master-grade",
    code: "MG",
    name: "Master Grade (MG 1/100)",
    scale: "1/100",
    avgHeight: "~18 - 22 cm",
    difficulty: 3,
    innerFrame: "Toàn bộ",
    partCount: "350 - 650 chi tiết",
    buildTime: "8 - 16 giờ",
    priceRefVND: "900.000 - 2.200.000 VNĐ",
    targetAudience: "Builder trung cấp đến cao cấp, người yêu thích tỷ lệ tiêu chuẩn hoàn hảo",
    pros: [
      "Tỷ lệ vàng 1/100: cầm đầm tay, chi tiết rõ ràng, không quá nhỏ cũng không quá cồng kềnh",
      "Khung xương Inner Frame hoàn chỉnh 100%, buồng lái mở được và có mô hình phi công",
      "Cơ chế piston thủy lực chuyển động thật khi co duỗi tay chân",
      "Phiên bản đặc biệt Ver.Ka do ngài Katoki Hajime thiết kế có decal nước và tạo hình xuất sắc"
    ],
    cons: [
      "Hộp to, chiếm nhiều diện tích tủ trưng bày",
      "Một số kit có balo vũ khí quá nặng cần có giá đỡ Action Base đi kèm",
      "Thời gian lắp tương đối lâu"
    ],
    description: "Dòng sản phẩm được mệnh danh là 'Tỷ lệ vàng' trong lòng mọi tín đồ Gunpla. Ra mắt từ năm 1995, Master Grade sở hữu bộ khung xương cơ học toàn phần tinh xảo, hệ thống xi-lanh piston chuyển động đồng bộ, khớp ngón tay cử động và buồng lái cockpit có thể mở ra để ngắm phi công bên trong.",
    iconTag: "TỶ LỆ VÀNG HOÀN HẢO 1/100",
    recommendedKits: ["MG 1/100 Gundam Barbatos", "MG 1/100 Eclipse Gundam", "MG 1/100 Sazabi Ver. Ka", "MG 1/100 Freedom 2.0"],
    badgeColor: "#f59e0b"
  },
  {
    id: "perfect-grade",
    code: "PG",
    name: "Perfect Grade (PG 1/60)",
    scale: "1/60",
    avgHeight: "~30 - 36 cm",
    difficulty: 5,
    innerFrame: "Khung nhiều lớp kim loại/nhựa",
    partCount: "800 - 1500+ chi tiết",
    buildTime: "25 - 50+ giờ",
    priceRefVND: "3.500.000 - 8.500.000 VNĐ",
    targetAudience: "Builder kỳ cựu, người sưu tầm tác phẩm đỉnh cao làm tâm điểm căn phòng",
    pros: [
      "Đỉnh cao kỹ nghệ sản xuất mô hình cơ khí thế giới",
      "Kích thước khổng lồ 30+ cm sừng sững uy nghi",
      "Khung xương đa tầng (Multi-layered Truss Frame), kim loại đúc die-cast, ốc vít cơ học",
      "Hệ thống đèn LED chiếu sáng cảm biến mắt, ngực và lò phản ứng",
      "Ngón tay khớp cầu cử động từng đốt như bàn tay người thật"
    ],
    cons: [
      "Mức giá cao, đầu tư tài chính lớn",
      "Đòi hỏi không gian trưng bày tủ rộng và thông thoáng",
      "Độ khó cao, lắp sai có thể mất nhiều giờ tháo gỡ"
    ],
    description: "Như tên gọi 'Hoàn hảo', PG là tượng đài kỹ nghệ của Bandai. Mỗi mô hình PG là một dự án nghiên cứu chế tạo cơ khí thu nhỏ với cấu trúc khung xương 3-4 lớp giáp xếp chồng, các chi tiết kim loại gia cường, hệ thống dây dẫn và đèn LED ma mị. Đây là món quà danh giá nhất mà bất kỳ người chơi Gunpla nào cũng khao khát được một lần chinh phục.",
    iconTag: "ĐỈNH CAO KỸ NGHỆ 1/60",
    recommendedKits: ["PG Unleashed 1/60 RX-78-2 Gundam", "PG 1/60 Strike Gundam", "PG 1/60 Exia Lighting Model"],
    badgeColor: "#ef4444"
  },
  {
    id: "super-deformed",
    code: "SD",
    name: "SD Gundam (SDEX / SDW / BB Senshi)",
    scale: "Non-scale (Tỷ lệ đầu to thân nhỏ)",
    avgHeight: "~8 - 10 cm",
    difficulty: 1,
    innerFrame: "Không có",
    partCount: "40 - 70 chi tiết",
    buildTime: "20 - 40 phút",
    priceRefVND: "120.000 - 220.000 VNĐ",
    targetAudience: "Trẻ em, người thích phong cách Chibi ngộ nghĩnh, người thích vẽ custom màu sắc",
    pros: [
      "Tạo hình ngộ nghĩnh, đáng yêu với đôi mắt biểu cảm",
      "Lắp siêu nhanh, giá rẻ nhất trong các dòng mô hình",
      "Nhiều chủ đề độc đáo (Tam Quốc Chí Sangokuden, Hiệp sĩ Thế giới Kỵ sĩ, Anh hùng World Heroes)"
    ],
    cons: [
      "Nhiều mảng rỗng ruột ở mặt sau tay/chân để tiết kiệm nhựa",
      "Phụ thuộc nhiều vào sticker dán tem màu, cần tô vẽ thêm màu để đẹp"
    ],
    description: "Dòng mô hình phong cách Chibi đáng yêu với tỷ lệ 2-3 đầu. SD Gundam biến các chiến binh cơ giáp dũng mãnh thành những nhân vật hoạt hình vui nhộn, là lựa chọn số một cho các bạn nhỏ hoặc người muốn trang trí bàn làm việc với chi phí tối thiểu.",
    iconTag: "CHIBI NGỘ NGHĨNH",
    recommendedKits: ["SDW Heroes Cao Cao Wing Gundam", "SDEX RX-78-2 Gundam", "SDCS Zeta Gundam"],
    badgeColor: "#ec4899"
  },
  {
    id: "full-mechanics",
    code: "FM / RE100",
    name: "Full Mechanics / RE 1/100",
    scale: "1/100",
    avgHeight: "~18 - 20 cm",
    difficulty: 2.5,
    innerFrame: "Khung cơ bản đơn giản hóa",
    partCount: "200 - 320 chi tiết",
    buildTime: "4 - 7 giờ",
    priceRefVND: "750.000 - 1.400.000 VNĐ",
    targetAudience: "Người thích kích thước to 1/100 nhưng không muốn quá đau đầu vì hàng trăm mảnh xương MG",
    pros: [
      "Kích thước lớn 1/100 bằng MG nhưng thời gian ráp nhanh gấp đôi",
      "Khắc phục các mẫu hiếm không bao giờ có dòng MG (như Nightingale, Calamity, Raider)",
      "Chi tiết giáp ngoài sắc nét tương đương hoặc đẹp hơn một số MG cũ"
    ],
    cons: [
      "Khung xương bên trong không hoàn chỉnh và thiếu các cơ chế trượt giáp phức tạp"
    ],
    description: "Cầu nối lý tưởng giữa HG và MG. Full Mechanics mang đến trải nghiệm ngắm nhìn mô hình to lớn 1/100 với mức giá và độ khó vừa tầm, tập trung toàn bộ tinh hoa vào độ nét của lớp vỏ ngoài thay vì cấu trúc xương bên trong.",
    iconTag: "TO LỚN 1/100 · DỄ DÀNG TIẾP CẬN",
    recommendedKits: ["Full Mechanics 1/100 Gundam Aerial", "Full Mechanics 1/100 Raider Gundam", "RE/100 Nightingale"],
    badgeColor: "#14b8a6"
  },
  {
    id: "mega-size",
    code: "MEGA",
    name: "Mega Size Model (1/48)",
    scale: "1/48",
    avgHeight: "~37.5 cm",
    difficulty: 2,
    innerFrame: "Không có (Bộ khung nẹp chốt lớn)",
    partCount: "200 - 250 chi tiết",
    buildTime: "3 - 5 giờ",
    priceRefVND: "2.100.000 - 3.200.000 VNĐ",
    targetAudience: "Người thích tượng khổng lồ trưng bày sảnh lễ tân, phòng khách, showroom",
    pros: [
      "Kích thước khổng lồ gần 40cm, tạo ấn tượng choáng ngợp",
      "Chi tiết to bản, các part bấm vào nhau rất dễ dàng, dụng cụ 'Part Separator' độc quyền đi kèm",
      "Cấu trúc chốt khóa 'Click-mechanism' bền bỉ"
    ],
    cons: [
      "Chiếm diện tích rất lớn",
      "Biên độ cử động cơ bản, ít phụ kiện"
    ],
    description: "Dòng Gunpla có tỷ lệ lớn nhất từng được Bandai thương mại hóa rộng rãi. Với chiều cao gần 40cm, mô hình Mega Size như một bức tượng điêu khắc đồ sộ giữa căn phòng, thu hút mọi ánh nhìn của khách ghé thăm.",
    iconTag: "KHỔNG LỒ 1/48",
    recommendedKits: ["Mega Size 1/48 RX-78-2 Gundam", "Mega Size 1/48 Unicorn Gundam", "Mega Size 1/48 Zaku II"],
    badgeColor: "#6366f1"
  }
];
