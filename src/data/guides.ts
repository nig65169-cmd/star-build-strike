export interface GuideArticle {
  id: string;
  category: "building" | "custom";
  level: "Cơ bản" | "Trung cấp" | "Nâng cao";
  title: string;
  readTime: string;
  summary: string;
  toolsRequired: string[];
  steps: {
    title: string;
    description: string;
    proTip?: string;
    warning?: string;
  }[];
  commonMistakes: string[];
  safetyTips?: string[];
  tags: string[];
}

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    id: "essential-tools-and-unboxing",
    category: "building",
    level: "Cơ bản",
    title: "Bộ dụng cụ nhập môn & Chuẩn bị trước khi mở hộp Gunpla",
    readTime: "5 phút đọc",
    summary: "Hướng dẫn nhận biết các dụng cụ cơ bản nhất, cách đọc mã vỉ runner trên sách hướng dẫn và mẹo kiểm tra linh kiện trước khi bóc bọc nilong.",
    toolsRequired: [
      "Kìm cắt mô hình (Nipper chuyên dụng 1 lưỡi hoặc 2 lưỡi)",
      "Dao gọt mô hình nghệ thuật (Art Knife / Hobby Knife cán nhôm)",
      "Dũa móng thủy tinh (Glass File) hoặc que nhám 800 - 1000 grit",
      "Nhíp gắp nhọn đầu cong (Tweezers) để dán decal",
      "Tăm bông thân giấy để miết decal và lau mực"
    ],
    steps: [
      {
        title: "Bước 1: Kiểm tra vỉ Runner trước khi xé túi nilon",
        description: "Khi mở hộp, chưa nên xé ngay các bọc nilon trong suốt. Hãy lật trang đầu của sổ tay hướng dẫn (Manual), đối chiếu danh sách Runner (A, B, C, D...). Đếm số lượng runner và quan sát xem có chi tiết nào bị đúc lỗi (flash), cong vẹo hoặc gãy rụng trong quá trình vận chuyển hay không.",
        proTip: "Nếu phát hiện part bị gãy hoặc thiếu vỉ khi túi nilon còn nguyên niêm phong, bạn hoàn toàn có thể yêu cầu shop bảo hành đổi trả."
      },
      {
        title: "Bước 2: Chuẩn bị không gian làm việc khoa học",
        description: "Bố trí bàn làm việc đủ ánh sáng trắng, lót thảm cắt cao su (Cutting mat) để bảo vệ mặt bàn và tránh cùn mũi dao. Chuẩn bị một chiếc khay hoặc nắp hộp Gunpla để hứng các mẩu nhựa thừa sau khi cắt.",
        proTip: "Dùng kẹp tài liệu hoặc giá đỡ runner (Runner Stand) để cắm các vỉ chữ cái thẳng đứng, giúp tìm kiếm part nhanh gấp đôi mà không xước nhựa."
      },
      {
        title: "Bước 3: Hiểu đúng các ký hiệu trên sách hướng dẫn",
        description: "Sách hướng dẫn Gunpla của Bandai dùng biểu tượng quốc tế: [X2] là làm 2 lần đối xứng, [Kéo cắt] là cắt phần thừa, [Mặt cắt góc] là chú ý chiều lắp, [Bàn tay gạt] là bấm chặt không để hở khe.",
        proTip: "Các chi tiết khớp nối bên trái và bên phải thường có ký hiệu 'L' và 'R' nhỏ dập nổi trên runner, đừng để lẫn lộn."
      }
    ],
    commonMistakes: [
      "Dùng kéo cắt giấy hoặc kìm bấm móng tay để bấm part (gây dập nát nhựa và để lại vết lõm trắng vĩnh viễn).",
      "Cắt rời toàn bộ các part ra khỏi vỉ cùng một lúc rồi mới mò mẫm ráp (dẫn đến mất chi tiết và không biết số thứ tự part).",
      "Xé bao nilong vội vàng làm rơi mất những chi tiết siêu nhỏ như ngọc cảm biến hoặc sừng V-fin."
    ],
    tags: ["Dụng cụ", "Nhập môn", "Runner", "Chuẩn bị"]
  },
  {
    id: "two-cut-technique-and-nub-removal",
    category: "building",
    level: "Cơ bản",
    title: "Quy tắc cắt 2 lần (Two-Cut Technique) & Xử lý vết Nub Mark không để lại tì vết",
    readTime: "7 phút đọc",
    summary: "Kỹ thuật nền tảng quyết định 90% vẻ đẹp của một mẫu Gunpla lắp mộc (Straight Build). Cách loại bỏ cổng rót nhựa (Gate) mà không làm biến dạng bề mặt.",
    toolsRequired: [
      "Kìm cắt thô (Kìm 2 lưỡi thông thường)",
      "Kìm cắt siêu bén 1 lưỡi (Single Blade Nipper như GodHand SPN-120 hoặc DSPIAE ST-A)",
      "Dao trổ Art Knife lưỡi thép 30 độ",
      "Dũa thủy tinh Nano Glass File",
      "Miếng bọt biển đánh bóng (Sponge Buffer 2000 - 4000 grit)"
    ],
    steps: [
      {
        title: "Bước 1: Nhát cắt thứ nhất (Cắt cách xa chi tiết)",
        description: "Tuyệt đối không áp sát lưỡi kìm vào thân chi tiết ngay lần đầu! Đặt kìm cách cạnh linh kiện khoảng 1mm - 2mm trên cổng runner và bấm dứt khoát. Nhát cắt này giúp giảm lực nén truyền vào thân part nhựa.",
        proTip: "Khi cắt rời part ra khỏi vỉ, bạn có thể dễ dàng cầm nắm và xoay góc để thực hiện nhát cắt thứ hai an toàn nhất."
      },
      {
        title: "Bước 2: Nhát cắt thứ hai (Tỉa sát cổng nub)",
        description: "Dùng kìm 1 lưỡi siêu bén (hoặc dao gọt), đặt mặt phẳng của kìm áp sát song song với bề mặt chi tiết, bấm nhẹ nhàng để hớt đi 90% phần cuống nhựa còn thừa. Chừa lại một lớp nhựa mỏng như tờ giấy (khoảng 0.1mm) để tránh lẹm vào giáp.",
        warning: "Không dùng kìm 1 lưỡi để bẻ, vặn hoặc cắt thanh runner dày trên 3mm vì lưỡi dao siêu mỏng rất dễ mẻ!"
      },
      {
        title: "Bước 3: Gọt phẳng bằng dao Art Knife hoặc Dũa thủy tinh",
        description: "Dùng lưỡi dao gọt trượt nhẹ theo từng lớp mỏng (như gọt vỏ táo), không ấn sâu mũi dao. Hoặc sử dụng que dũa thủy tinh nano dũa một chiều nhẹ nhàng cho đến khi ngón tay sờ qua cảm thấy phẳng lì hoàn toàn.",
        proTip: "Dũa thủy tinh nano có ưu điểm vượt trội: vừa mài phẳng nub vừa tự động đánh bóng bề mặt nhựa trở lại độ bóng nguyên bản của nhựa đúc."
      },
      {
        title: "Bước 4: Đánh bóng và xóa vệt căng nhựa (Stress Mark)",
        description: "Nếu lỡ tay làm nhựa bị đổi màu trắng do lực căng (Stress Mark), bạn có thể dùng móng tay miết mạnh nhiều lần lên vết trắng, hoặc chà qua miếng xốp nhám 3000 grit để lớp ma sát nhiệt làm dịu màu nhựa.",
        proTip: "Thoa một lớp mỏng cồn Isopropyl hoặc chấm nhẹ chút xi-măng Tamiya Extra Thin cũng có thể làm tan biến các vi vết rạn nứt."
      }
    ],
    commonMistakes: [
      "Đặt kìm cắt sát mép và giật mạnh làm part bị lõm một mảng lớn không thể bù đắp.",
      "Mài nhám quá mạnh tay làm mất đi các đường gờ cạnh (Edge) sắc sảo của mô hình mecha.",
      "Dùng lực dao đẩy mạnh về phía ngón tay cái mà không có miếng bảo hộ."
    ],
    safetyTips: [
      "Luôn cắt dao theo hướng đi ra xa khỏi cơ thể và ngón tay.",
      "Đeo kính bảo hộ khi bấm các cổng runner nhỏ để tránh mẩu nhựa bắn vào mắt."
    ],
    tags: ["Nub Mark", "Kỹ thuật cắt", "Dũa thủy tinh", "Kìm cắt"]
  },
  {
    id: "panel-lining-guide",
    category: "custom",
    level: "Cơ bản",
    title: "Kỹ thuật Kẻ lằn chìm (Panel Lining): Thổi hồn chiều sâu cho mô hình",
    readTime: "6 phút đọc",
    summary: "So sánh bút Gundam Marker chì kim, bút lông ngòi kim, và nước wash chảy mao dẫn Tamiya Panel Line Accent Color. Bí quyết kẻ lằn sạch đẹp không sợ nứt nhựa.",
    toolsRequired: [
      "Bút chì kẻ lằn kim loại 0.2mm hoặc Gundam Marker GM01 (Black) / GM02 (Gray) / GM03 (Brown)",
      "Lọ nước kẻ lằn Tamiya Panel Line Accent Color (chảy mao dẫn)",
      "Bột xốp tẩy chì trắng hoặc gôm mềm Pentel",
      "Dung dịch tản sơn / rửa men Enamel Thinner X-20 hoặc dầu Zippo (bật lửa)",
      "Tăm bông đầu nhọn công nghiệp không để lại sợi bông"
    ],
    steps: [
      {
        title: "Bước 1: Chọn màu kẻ lằn phù hợp với màu sắc lớp giáp",
        description: "Quy tắc phối màu chuẩn studio Bandai: Dùng màu Xám (Gray) cho các mảng giáp Trắng/Xanh nhạt để tạo bóng tự nhiên; Dùng màu Nâu (Brown) cho mảng giáp Vàng và Đỏ để giữ độ ấm; Dùng màu Đen (Black) cho mảng giáp Xanh đậm, Xám tối hoặc khung xương kim loại.",
        proTip: "Không bao giờ dùng màu đen tuyền trên nền nhựa trắng vì độ tương phản quá gắt sẽ làm mô hình trông giống hình vẽ hoạt hình thô kệch."
      },
      {
        title: "Bước 2: Ứng dụng hiện tượng mao dẫn với Tamiya Accent Color",
        description: "Lắc đều lọ nước wash. Dùng cọ gắn sẵn dưới nắp chấm nhẹ vào đầu rãnh panel line. Nhờ sức căng bề mặt và độ nhớt cực thấp, dòng mực men sẽ tự động chảy dọc theo rãnh chỉ trong nửa giây.",
        warning: "CẢNH BÁO QUAN TRỌNG: Không bôi Tamiya Accent Color lên các khớp động lực bằng nhựa ABS hoặc chi tiết đã lắp ráp siết chặt! Dung môi men sẽ ngấm vào vi vết nứt nội tại và làm GIÒN GÃY NHỰA ngay lập tức. Chỉ dùng trên nhựa PS hoặc sơn một lớp lót bóng Gloss Coat bảo vệ trước."
      },
      {
        title: "Bước 3: Vệ sinh đường lem sạch bóng",
        description: "Đợi 5 - 10 phút cho dung môi bay hơi và mực khô lại. Thấm một lượng RẤT NHỎ dầu Zippo hoặc Enamel Thinner vào tăm bông (chỉ ẩm nhẹ, không được ướt sũng nhỏ giọt). Lau nhẹ vuông góc với đường rãnh để quét sạch các vết lem bên ngoài mà không làm trôi mực bên trong khe.",
        proTip: "Dầu Zippo bay hơi nhanh hơn Enamel Thinner và an toàn với nhựa hơn rất nhiều."
      }
    ],
    commonMistakes: [
      "Thấm tăm bông quá ướt làm dung môi chảy tràn vào khe rãnh và tẩy bay luôn cả đường mực bên trong.",
      "Kẻ lằn trực tiếp lên khung xương ABS khi chưa phủ sơn lót làm gãy vụn các khớp vai/khớp hông.",
      "Dùng cồn 90 độ hoặc Acetone (nước tẩy sơn móng tay) để chùi - Acetone sẽ làm chảy biến dạng nhựa Gunpla vĩnh viễn!"
    ],
    tags: ["Panel Line", "Kẻ lằn", "Tamiya Accent", "Gundam Marker"]
  },
  {
    id: "waterslide-decals-mastery",
    category: "building",
    level: "Trung cấp",
    title: "Nghệ thuật dán Decal Nước (Waterslide Decals) & Dung dịch bổ trợ Setter/Softer",
    readTime: "8 phút đọc",
    summary: "Khác biệt giữa Decal dán (Sticker), Decal cà (Dry transfer) và Decal nước (Waterslide). Quy trình dán tem kỹ thuật sắc nét như in sẵn vào giáp.",
    toolsRequired: [
      "Tấm Decal nước chính hãng Bandai hoặc các hãng thứ 3 uy tín (G-Rework, Delpi Decal)",
      "Khay nước ấm nhỏ hoặc đĩa đựng nước sạch",
      "Nhíp gắp đầu nhọn cong bằng thép không gỉ",
      "Dung dịch hỗ trợ bám dính Mr. Mark Setter (nắp xanh)",
      "Dung dịch làm mềm decal ôm cong Mr. Mark Softer (nắp xanh lá)",
      "Tăm bông nhọn và khăn giấy thấm hút"
    ],
    steps: [
      {
        title: "Bước 1: Cắt tỉa miếng decal rời khỏi tờ giấy gốc",
        description: "Dùng dao trổ sắc bén cắt sát đường viền của con tem kỹ thuật cần dán. Tránh cắt quá rộng để giảm thiểu phần màng phim trong suốt thừa.",
        proTip: "Ghi nhớ mã số vị trí trên sách hướng dẫn trước khi cắt rời để không bị nhầm lẫn giữa hàng chục ký hiệu tem cảnh báo (Caution Marks)."
      },
      {
        title: "Bước 2: Ngâm nước ấm từ 15 - 20 giây",
        description: "Gắp mẩu decal nhúng vào nước ấm trong 15-20 giây rồi đặt lên một tờ khăn giấy ẩm. Chờ thêm 30 giây để lớp keo hòa tan, kiểm tra bằng cách dùng đầu tăm bông đẩy nhẹ xem màng phim đã trượt tự do trên đế giấy hay chưa.",
        proTip: "Không ngâm ngập decal trong nước quá lâu vì lớp keo mặt sau sẽ bị hòa tan trôi mất vào nước."
      },
      {
        title: "Bước 3: Quét một giọt Mr. Mark Setter lên bề mặt nhựa",
        description: "Chấm một giọt nhỏ Mark Setter lên vị trí cần dán trên thân giáp. Mark Setter chứa chất kết dính chuyên dụng giúp decal bám chặt vào nhựa, chống hiện tượng bong tróc sau nhiều năm.",
        proTip: "Nếu dán lên bề mặt gồ ghề, góc bo cong hoặc khe rãnh giáp, hãy dùng Mr. Mark Softer sau khi căn chỉnh để làm màng decal mềm ra và ép chặt vào khe."
      },
      {
        title: "Bước 4: Trượt decal sang mô hình và lăn khô bọt khí",
        description: "Cầm đế giấy sát vị trí cần dán, dùng đầu nhíp hoặc tăm bông trượt nhẹ màng phim sang mặt giáp. Căn chỉnh góc độ ngay ngắn. Sau đó dùng tăm bông lăn từ tâm ra mép ngoài để đẩy toàn bộ bọt khí và nước thừa ra ngoài.",
        warning: "Khi đã quét Mark Softer, màng decal rất mềm và dễ rách, tuyệt đối không di chuyển mạnh tay lúc này."
      }
    ],
    commonMistakes: [
      "Không ép hết bọt khí dẫn đến hiện tượng 'Silvering' (lớp màng trong bị lóe sáng bạc nhìn lộ rõ viền tem giả).",
      "Chạm tay trực tiếp vào mặt keo decal làm dính dầu mỡ ngón tay giảm độ bám."
    ],
    tags: ["Decal nước", "Mark Setter", "Chi tiết kỹ thuật", "Mark Softer"]
  },
  {
    id: "airbrush-painting-fundamentals",
    category: "custom",
    level: "Nâng cao",
    title: "Nhập môn Sơn Airbrush cho Gunpla: Pha sơn, Áp suất nén và Kỹ thuật Pre-shading",
    readTime: "12 phút đọc",
    summary: "Toàn bộ kiến thức về súng phun sơn khí nén, tỷ lệ pha loãng thinner tiêu chuẩn cho sơn Lacquer/Acrylic, cách tạo khối ánh sáng đổ bóng chuyên nghiệp.",
    toolsRequired: [
      "Bút phun sơn Airbrush Gravity Feed Dual-Action ngòi 0.3mm",
      "Máy nén khí mini có bình tích áp (Tank) và lọc ẩm (Moisture Trap)",
      "Sơn lót bề mặt Primer Surfacer (Mr. Hobby Surfacer 1000/1200)",
      "Hệ màu sơn chuyên dụng (Mr. Color, Gaia Notes, Vallejo Mecha Color)",
      "Dung dịch pha sơn chuyên dụng (Lacquer Thinner có chất chậm khô Leveling Thinner)",
      "Que kẹp cá sấu giữ part và bàn xốp cắm kẹp sơn",
      "Mặt nạ phòng độc than hoạt tính chuyên dụng 3M 6200 / phin lọc 6001"
    ],
    steps: [
      {
        title: "Bước 1: Quy tắc pha sơn chuẩn tỷ lệ 'Sữa tươi'",
        description: "Đối với sơn hệ Lacquer cao cấp (Mr. Color/Gaia), tỷ lệ pha loãng vàng là 1 phần sơn : 1.5 đến 2 phần Thinner. Trộn đều trong cốc rót sơn, khi nhúng que khuấy lên nhỏ giọt, dòng sơn phải chảy mượt như sữa tươi (không đặc quánh như sữa đặc và không lỏng toẹt như nước lã).",
        proTip: "Nên sử dụng Mr. Color Leveling Thinner (có chứa chất làm chậm khô Retarder) để hạt sơn tự căng phẳng bóng mịn màng không bị sần da cam."
      },
      {
        title: "Bước 2: Phun lớp lót Surfacer Primer tạo chân bám",
        description: "Không bao giờ phun màu trực tiếp lên nhựa trần bóng! Lớp sơn lót Surfacer 1200 màu xám có 3 nhiệm vụ sống còn: tạo độ bám dính siêu chắc cho hạt sơn, phát hiện các vết xước nub mark chưa xử lý kỹ, và làm đồng nhất màu nền nhựa ban đầu.",
        warning: "Điều chỉnh áp suất máy nén ở mức 15 - 20 PSI khi phun sơn lót để hạt sơn phủ đều không bị bắn bụi khô."
      },
      {
        title: "Bước 3: Kỹ thuật đổ bóng Pre-shading huyền thoại",
        description: "Sau khi lót xám, dùng bút airbrush đi một đường màu đen hoặc nâu đậm men theo các góc cạnh, mép gập và rãnh chìm của chi tiết giáp. Tiếp theo, phun lớp màu chính phủ từ trung tâm part tản dần ra mép, để lại một quầng bóng tối mờ ảo ở các góc cạnh. Phương pháp này mang lại cảm giác đồ sộ hùng vĩ như một cỗ máy chiến tranh khổng lồ.",
        proTip: "Giữ đầu bút airbrush cách bề mặt part khoảng 5 - 8cm, bóp gió trước rồi mới kéo lùi cò phun sơn ra sau."
      }
    ],
    commonMistakes: [
      "Phun trong phòng kín không thông gió và không đeo mặt nạ phòng độc (dung môi hữu cơ thơm rất độc hại cho phổi).",
      "Để áp suất nén quá cao (>30 PSI) làm luồng khí sấy khô hạt sơn ngay trên không trung gây hiện tượng sần sùi sáp nhám (Orange Peel).",
      "Không vệ sinh súc rửa bình sơn sau mỗi lần đổi màu làm nghẹt đầu kim béc phun (Nozzle Clogging)."
    ],
    safetyTips: [
      "BẮT BUỘC đeo mặt nạ phòng độc lọc hơi hữu cơ 3M đạt chuẩn NIOSH.",
      "Lắp đặt buồng hút sơn (Spray Booth) có quạt thông gió đẩy khí độc ra ngoài cửa sổ.",
      "Tuyệt đối không hút thuốc hoặc có tia lửa gần khu vực pha sơn Lacquer vì dung môi rất dễ bắt cháy."
    ],
    tags: ["Airbrush", "Sơn Lacquer", "Pre-shading", "Máy nén khí", "An toàn"]
  },
  {
    id: "topcoat-finishing-and-weathering",
    category: "custom",
    level: "Trung cấp",
    title: "Lớp phủ bảo vệ Topcoat & Kỹ thuật Sa bàn Sa mạc / Chiến trường Weathering",
    readTime: "9 phút đọc",
    summary: "Lựa chọn Topcoat Flat/Matte hay Gloss. Các bước dry brush vệt xước kim loại, dặm mút xốp sứt mẻ giáp (Chipping) và wash rỉ sét bụi đất.",
    toolsRequired: [
      "Chai sơn xịt bóng/nhám bảo vệ Mr. Super Clear Matt / Topcoat Flat gốc nước",
      "Màu sơn Acrylic đen/bạc kim loại Chrome Silver",
      "Mút xốp bọt biển xé vụn (Sponge)",
      "Cọ vẽ lông cứng đầu vuông để Dry Brush",
      "Phấn trang điểm sa bàn Tamiya Weathering Master (Set A/B/C với tông gỉ sắt, muội khói, cát bùn)"
    ],
    steps: [
      {
        title: "Bước 1: Hiểu và chọn đúng loại Topcoat",
        description: "Lớp phủ Topcoat là chiếc khiên bảo vệ toàn bộ công sức kẻ lằn và decal của bạn: [Flat / Matte (Nhám)]: Khử độ bóng nhựa đồ chơi, mang lại chất cảm kim loại quân sự đanh thép, là lựa chọn đẹp nhất cho 90% Gunpla; [Gloss (Bóng)]: Dành cho các mẫu xe đua, lớp mạ ngọc trai Candy Coat hoặc Unicorn ánh kim; [Semi-Gloss (Bán bóng)]: Cân bằng trung tính.",
        warning: "Chỉ xịt Topcoat trong những ngày trời nắng ráo, độ ẩm không khí dưới 65%. Xịt vào ngày mưa nồm ẩm sẽ làm đọng sương trắng xóa mờ đục toàn bộ mô hình (hiện tượng Frosting) rất khó khắc phục!"
      },
      {
        title: "Bước 2: Kỹ thuật Chipping tạo vết xước tróc giáp",
        description: "Xé một mẩu mút xốp bọt biển nhỏ kẹp vào nhíp. Nhúng vào màu xám đen kim loại, dặm bớt màu lên khăn giấy cho đến khi chỉ còn những đốm lấm chấm rất khô. Chấm nhẹ vào các mép giáp nhô ra - những nơi thường xuyên va chạm với địa hình hoặc đạn lạc ngoài tiền tuyến.",
        proTip: "Quy tắc 'Less is More': Đừng lạm dụng quá nhiều làm mô hình biến thành đống sắt vụn; hãy tập trung vào mũi bàn chân, gối, khiên và giáp vai."
      },
      {
        title: "Bước 3: Hiệu ứng muội khói ống xả động cơ phản lực",
        description: "Dùng que cọ mút trong hộp Tamiya Weathering Master quét màu đen khói (Soot) quanh miệng ống xả Vernier Thruster sau lưng và dưới lòng bàn chân. Tạo cảm giác luồng lửa phản lực nghìn độ vừa thiêu đốt kim loại trong các pha tăng tốc xé gió.",
        proTip: "Xịt một lớp phủ Matte mỏng cuối cùng để khóa chặt các hạt phấn hiệu ứng không bị trôi khi chạm tay vào mô hình."
      }
    ],
    commonMistakes: [
      "Xịt chai xịt đứng yên một chỗ làm đọng sơn thành giọt chảy dài (Runners). Phải xịt lướt ngang dứt khoát từ ngoài vào trong rồi quét ra ngoài.",
      "Chai xịt quá gần (dưới 15cm) làm áp lực khí thổi bay các chi tiết nhỏ chưa cố định chắc chắn."
    ],
    tags: ["Topcoat", "Weathering", "Chipping", "Bảo quản", "Tamiya"]
  }
];
