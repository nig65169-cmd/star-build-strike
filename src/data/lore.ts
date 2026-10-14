export interface GundamSeriesLore {
  id: string;
  timelineCode: string;
  title: string;
  originalYear: string;
  protagonist: string;
  antagonist: string;
  eraBackground: string;
  keyFactions: {
    name: string;
    flag: string;
    description: string;
  }[];
  signatureMobileSuits: string[];
  coreTech: {
    name: string;
    description: string;
  };
  philosophicalThemes: string;
  spoilers: string;
}

export const GUNDAM_LORE_SERIES: GundamSeriesLore[] = [
  {
    id: "universal-century",
    timelineCode: "U.C. (Universal Century)",
    title: "Vũ trụ Thế Kỷ Phổ Quát – Universal Century (0079 ~ 0096+)",
    originalYear: "1979 - Hiện tại",
    protagonist: "Amuro Ray / Kamille Bidan / Banagher Links / Judau Ashta",
    antagonist: "Char Aznable / Haman Karn / Paptimus Scirocco / Full Frontal",
    eraBackground: "Do Trái Đất bùng nổ dân số và cạn kiệt tài nguyên thiên nhiên, nhân loại di cư lên các thành phố không gian khổng lồ (Space Colony) quay quanh quỹ đạo Trái Đất. Năm U.C. 0079, Công quốc Zeon (Side 3) tuyên bố độc lập và phát động cuộc 'Chiến tranh Một Năm' (One Year War). Zeon đã thực hiện chiến dịch thả thuộc địa không gian Colony Drop xuống Trái Đất, hủy diệt một nửa dân số toàn cầu chỉ trong tuần đầu tiên của cuộc chiến.",
    keyFactions: [
      {
        name: "Liên bang Trái Đất (Earth Federation - EFF / EFSF)",
        flag: "Đại bàng vàng trên nền khiên xanh",
        description: "Chính phủ liên minh toàn cầu đóng đô tại cứ điểm ngầm Jaburo (rừng Amazon). Sở hữu tiềm lực kinh tế và công nghiệp khổng lồ nhưng quan liêu, bảo thủ và áp bức cư dân không gian (Spacenoids)."
      },
      {
        name: "Công quốc Zeon (Principality of Zeon)",
        flag: "Huy hiệu Zeon mạ vàng chữ thập đen đỏ",
        description: "Quốc gia quân phiệt độc tài nằm xa Trái Đất nhất (Side 3). Được sáng lập bởi nhà tư tưởng Zeon Zum Deikun, nhưng sau đó gia tộc Zabi đã ám sát ông để tiếm quyền biến Zeon thành cỗ máy chiến tranh hiếu chiến."
      },
      {
        name: "AEUG & Londo Bell",
        flag: "Biểu tượng ngôi sao 3 cánh",
        description: "Lực lượng kháng chiến và đơn vị đặc nhiệm tinh nhuệ được thành lập để ngăn chặn các phần tử cực đoan và bảo vệ hòa bình mong manh giữa Địa Cầu và Không Gian."
      }
    ],
    signatureMobileSuits: ["RX-78-2 Gundam", "MS-06 Zaku II", "MSZ-006 Zeta Gundam", "RX-93 Nu Gundam", "MSN-04 Sazabi", "RX-0 Unicorn Gundam"],
    coreTech: {
      name: "Hạt Minovsky & Khung Psycho-Frame",
      description: "Hạt Minovsky tán xạ trong không gian làm tê liệt toàn bộ radar tầm xa và sóng vô tuyến, ép buộc mọi cuộc chiến phải quay về giao chiến thị giác tầm gần (Visual Combat) bằng robot hai chân Mobile Suit. Về sau, công nghệ Psycho-Frame cho phép khuếch đại sóng não tâm linh Newtype biến ý nghĩ thành sức mạnh vật lý."
    },
    philosophicalThemes: "Bi kịch của chiến tranh: Không có phe phái nào thuần túy là chính nghĩa hay tà ác. Sự ra đời của Newtype tượng trưng cho bước tiến hóa tâm linh của loài người để thấu hiểu lẫn nhau không định kiến, nhưng rốt cuộc lại bị các chính khách biến thành công cụ giết chóc.",
    spoilers: "Trận Axis Shock (U.C. 0093): Amuro Ray cùng Nu Gundam đã cộng hưởng Psycho-Frame tạo ra vầng hào quang xanh đẩy lùi thiên thạch Axis cứu Trái Đất, cả Amuro và Char đều biến mất trong ánh sáng. Chiếc hộp Laplace (U.C. 0096) tiết lộ bản hiến pháp nguyên thủy thừa nhận quyền tự trị cho cư dân không gian đã bị Liên bang chôn giấu suốt gần một thế kỷ."
  },
  {
    id: "cosmic-era",
    timelineCode: "C.E. (Cosmic Era)",
    title: "Kỷ Nguyên Vũ Trụ – Cosmic Era (C.E. 71 ~ C.E. 75)",
    originalYear: "2002 (Gundam SEED) / 2004 (SEED Destiny) / 2024 (SEED Freedom)",
    protagonist: "Kira Yamato / Athrun Zala / Shinn Asuka",
    antagonist: "Rau Le Creuset / Gilbert Durandal / Foundation Black Knights",
    eraBackground: "Vũ trụ Cosmic Era xoay quanh sự phân hóa sâu sắc giữa hai giống loài: 'Naturals' (con người tự nhiên sinh ra bình thường) và 'Coordinators' (những đứa trẻ được chỉnh sửa bản đồ gen ADN từ trong bụng mẹ để sở hữu trí tuệ siêu phàm, thể chất vượt trội và miễn nhiễm bệnh tật). Sự ghen tị và kỳ thị lẫn nhau đã dẫn tới thảm kịch Bloody Valentine và bùng nổ chiến tranh hủy diệt chủng tộc.",
    keyFactions: [
      {
        name: "ZAFT / PLANT",
        flag: "Biểu tượng lục giác công nghệ",
        description: "Lực lượng quân sự của liên minh các cụm thuộc địa hình đồng hồ cát PLANT. Nơi sinh sống của phần lớn Coordinator sở hữu trình độ khoa học kỹ thuật vượt trội."
      },
      {
        name: "Liên minh Trái Đất (Earth Alliance / OMNI Enforcer)",
        flag: "Trái đất bao quanh bởi vòng kinh tuyến xanh",
        description: "Khối các quốc gia tự nhiên trên Trái Đất, bị thao túng ngầm bởi tổ chức khủng bố cực đoan chống Coordinator mang tên Blue Cosmos."
      },
      {
        name: "Quốc gia Trung lập Orb (Orb Union)",
        flag: "Sư tử vàng trên nền cờ đỏ",
        description: "Đảo quốc trung lập tại Thái Bình Dương tôn trọng sự chung sống hòa bình giữa Natural và Coordinator với triết lý: 'Không xâm lược quốc gia khác, không cho phép ngoại bang can thiệp vào chủ quyền'."
      }
    ],
    signatureMobileSuits: ["GAT-X105 Strike", "ZGMF-X10A Freedom", "ZGMF-X20A Strike Freedom", "ZGMF-X19A Infinite Justice", "ZGMF-X42S Destiny"],
    coreTech: {
      name: "Phase Shift (PS) Armor & Động cơ hạt nhân Hyper-Deuterion",
      description: "Giáp Phase Shift biến đổi cấu trúc tinh thể phân tử kim loại khi có dòng điện chạy qua, giúp vỏ ngoài miễn nhiễm hoàn toàn trước sát thương đạn pháo và tên lửa vật lý. Động cơ Hyper-Deuterion cung cấp nguồn năng lượng gần như vô tận."
    },
    philosophicalThemes: "Cuộc đấu tranh sinh tồn giữa công nghệ di truyền và phẩm giá con người. Phán quyết của Destiny Plan: Liệu con người có nên chấp nhận để một hệ thống thuật toán gen định đoạt số phận, nghề nghiệp và vị trí xã hội để đổi lấy hòa bình tuyệt đối không còn xung đột?",
    spoilers: "Rau Le Creuset thực chất là một bản sao vô tính bị lão hóa sớm của Al Da Flaga. Hắn ôm mối căm thù tột cùng đối với toàn thể nhân loại và âm mưu kích động cả hai phe ZAFT và Liên bang dùng súng hủy diệt Genesis tiêu diệt lẫn nhau đến tận diệt."
  },
  {
    id: "anno-domini",
    timelineCode: "A.D. (Anno Domini)",
    title: "Tây Lịch – Anno Domini (A.D. 2307 ~ A.D. 2314)",
    originalYear: "2007 (Gundam 00 Season 1 & 2) / 2010 (A Wakening of the Trailblazer)",
    protagonist: "Setsuna F. Seiei / Lockon Stratos / Allelujah Haptism / Tieria Erde",
    antagonist: "Alejandro Corner / Ribbons Almark / ELS (Extraterrestrial Living-metal Shapeshifter)",
    eraBackground: "Nguồn nhiên liệu hóa thạch cạn kiệt, nhân loại xây dựng ba Thang máy Vũ trụ khổng lồ nối liền với mạng lưới Vành đai Năng lượng Mặt Trời trên quỹ đạo. Quyền lực thế giới bị chia sẻ bởi ba khối siêu cường: Liên minh AEU, Liên bang Cải cách Con người HRL, và Khối Thống nhất Britannia UNION. Các cuộc chiến tranh cục bộ tranh giành tài nguyên diễn ra liên miên cho đến khi một tổ chức bí mật mang tên Celestial Being xuất hiện.",
    keyFactions: [
      {
        name: "Celestial Being",
        flag: "Thiên thần dang cánh ngậm cành ô liu",
        description: "Tổ chức vũ trang tư nhân được thành lập 200 năm trước bởi nhà khoa học Aeolia Schenberg. Sứ mệnh của họ là: 'Tiến hành can thiệp vũ lực chống lại mọi cuộc chiến tranh trên thế giới để thống nhất nhân loại trước cuộc tiếp xúc lớn với văn minh ngoài hành tinh'."
      },
      {
        name: "A-LAWS",
        flag: "Đại bàng hai đầu chuyên chế",
        description: "Lực lượng an ninh độc tài trá hình của Chính phủ Trái Đất thống nhất, thẳng tay thanh trừng bất kỳ tiếng nói bất đồng chính kiến nào dưới danh nghĩa ổn định trật tự."
      }
    ],
    signatureMobileSuits: ["GN-001 Gundam Exia", "GN-0000 00 Gundam / 00 Raiser", "GN-002 Dynames", "GNT-0000 00 Qan[T]"],
    coreTech: {
      name: "Động cơ Lò GN (GN Drive) & Hạt Quang lượng tử",
      description: "Động cơ bán vĩnh cửu tạo ra các hạt GN quang lượng tử màu xanh lục giúp mô hình có thể bay lượn mà không phụ thuộc nhiên liệu đẩy thông thường. Khi kích hoạt Trans-Am, hiệu suất cỗ máy tăng gấp 3 lần và chuyển sang ánh hào quang đỏ thẫm."
    },
    philosophicalThemes: "Giao thoa và đối thoại để thấu hiểu: Vũ lực có thể dập tắt xung đột bề nổi, nhưng chỉ có sự thấu hiểu chân thành bằng sóng lượng tử não bộ mới có thể xóa bỏ rào cản ngăn cách giữa các cá thể con người và các giống loài ngoài vũ trụ.",
    spoilers: "Aeolia Schenberg đã đoán trước được tương lai loài người sẽ chạm trán sinh vật ngoài Trái Đất (chủng tộc ELS). Ở phần phim điện ảnh, Setsuna F. Seiei đã dùng hệ thống Quantum Burst của 00 Qan[T] để hòa nhập ý thức với ELS, mang lại hòa bình vĩnh cửu và trở thành thực thể bán sinh học kim loại bất tử."
  },
  {
    id: "post-disaster",
    timelineCode: "P.D. (Post Disaster)",
    title: "Hậu Thảm Họa – Post Disaster (P.D. 323)",
    originalYear: "2015 (Mobile Suit Gundam: Iron-Blooded Orphans)",
    protagonist: "Mikazuki Augus / Orga Itsuka / Kudelia Aina Bernstein",
    antagonist: "McGillis Fareed / Rustal Elion / Mobile Armor Hashmal",
    eraBackground: "300 năm sau cuộc chiến tận thế 'Calamity War' tàn phá toàn bộ địa cầu bởi những cỗ máy tự hành Mobile Armor mất kiểm soát. Để bảo vệ nhân loại, 72 cỗ máy Gundam Frame đã được chế tạo. Bước sang thời bình P.D. 323, Trái Đất nằm dưới quyền cai trị của tổ chức cảnh sát quân sự Gjallarhorn, trong khi các thuộc địa sao Hỏa chìm trong nghèo đói và bóc lột, đẩy những đứa trẻ mồ côi trở thành 'chuột cống không gian' (Human Debris) làm bia đỡ đạn.",
    keyFactions: [
      {
        name: "Thiết Hoa Đoàn (Tekkadan)",
        flag: "Bông hoa sắt đỏ rực",
        description: "Đội quân đánh thuê do những thiếu niên nô lệ sao Hỏa nổi dậy thành lập dưới sự dẫn dắt của Orga Itsuka. Họ chiến đấu bất chấp tính mạng để tìm kiếm một gia đình thực sự và một vùng đất thuộc về mình."
      },
      {
        name: "Gjallarhorn",
        flag: "Khiên hiệp sĩ thất gia",
        description: "Hội đồng 7 gia tộc quý tộc (Seven Stars) nắm quyền kiểm soát toàn bộ vũ khí hủy diệt và giữ trật tự xã hội nhưng tha hóa bởi quyền lực và tham nhũng."
      }
    ],
    signatureMobileSuits: ["ASW-G-08 Gundam Barbatos", "ASW-G-11 Gundam Gusion Rebake", "ASW-G-66 Gundam Kimaris Vidar", "ASW-G-01 Gundam Bael"],
    coreTech: {
      name: "Hệ thống Alaya-Vijnana & Giáp Nanolaminate",
      description: "Phẫu thuật cấy ghép thiết bị giao diện nano trực tiếp vào tủy sống trẻ em, cho phép não bộ điều khiển Mobile Suit nhịp nhàng như chính tứ chi mình mà không cần đọc bảng điều khiển. Giáp Nanolaminate phản xạ hầu như toàn bộ tia laser beam, đưa chiến trường về các loại vũ khí đập búa nặng ngàn cân."
    },
    philosophicalThemes: "Chủ nghĩa hiện thực tàn khốc: Tình anh em trung thành son sắt của những đứa trẻ đường phố đối đầu với guồng quay chính trị lạnh lùng. Hòa bình không phải lúc nào cũng được mang lại bởi các nhân vật chính đạo đức hoàn mỹ, mà đôi khi bởi những chính khách xảo quyệt biết thỏa hiệp.",
    spoilers: "Trận chiến cuối cùng bi tráng tại sao Hỏa: Lực lượng Gjallarhorn dùng vũ khí hủy diệt Dainsleif nã xuyên không gian tiêu diệt Tekkadan. Cả Orga và Mikazuki đều hy sinh trong trận chiến cuối cùng để bảo vệ đường rút lui cho đồng đội. Tuy Tekkadan sụp đổ, sự hy sinh của họ đã thức tỉnh xã hội, dẫn đến việc giải tán Hội đồng Quý tộc và trao trả độc lập cho sao Hỏa."
  },
  {
    id: "ad-stella",
    timelineCode: "A.S. (Ad Stella)",
    title: "Kỷ Nguyên Tinh Tú – Ad Stella (A.S. 122)",
    originalYear: "2022 (Mobile Suit Gundam: The Witch from Mercury)",
    protagonist: "Suletta Mercury / Miorine Rembran",
    antagonist: "Prospera Mercury (Elnora) / Shaddiq Zenelli / Delling Rembran",
    eraBackground: "Một tương lai nơi các tập đoàn tư bản không gian khổng lồ (Spacians) độc quyền kiểm soát nền kinh tế và công nghệ vũ trụ, áp bức bóc lột người dân Trái Đất (Earthians) sống trong khu ổ chuột bạo loạn. Tại Học viện Công nghệ Asticassia do Benerit Group tài trợ, mọi tranh chấp về tài sản, danh dự và cả quyền hôn nhân với 'Tiểu thư cao quý' Miorine đều được giải quyết thông qua các trận quyết đấu (Duel) bằng Mobile Suit.",
    keyFactions: [
      {
        name: "Tập đoàn Benerit (Benerit Group)",
        flag: "Chữ B cách điệu tam giác công nghệ",
        description: "Liên minh các tập đoàn công nghiệp vũ trụ hùng mạnh nhất thống trị thị trường mecha: Jeturk Heavy Machinery, Peil Technologies, Grassley Defense Systems."
      },
      {
        name: "Công ty Cổ phần GUND-ARM Inc.",
        flag: "Bàn tay nâng niu búp mầm non",
        description: "Công ty khởi nghiệp do Miorine và Suletta sáng lập nhằm chuyển hướng công nghệ GUND Format từ vũ khí hủy diệt sang thiết bị y tế cứu người và chi giả sinh học."
      }
    ],
    signatureMobileSuits: ["XVX-016 Gundam Aerial", "X-EX01 Gundam Calibarn", "MD-0031FP Dilanza", "FP/A-77 Pharact"],
    coreTech: {
      name: "Hệ thống GUND Format & Hạt khoáng Permet",
      description: "Công nghệ kết nối thần kinh con người với máy móc ban đầu dùng trong y học sinh học để giúp con người thích nghi với môi trường khắc nghiệt ngoài vũ trụ. Khi biến tướng thành vũ khí quân sự, dòng dữ liệu Datastorm phản hồi quá tải sẽ thiêu rụi hệ thần kinh và giết chết phi công."
    },
    philosophicalThemes: "Tự do lựa chọn số phận: Vượt qua sự kiểm soát và thù hận của thế hệ cha mẹ để tự viết nên câu chuyện của chính mình. Câu châm ngôn: 'Lùi bước chỉ giữ được một, nhưng nếu tiến bước bạn sẽ giành được hai (Kinh nghiệm và Sự tin tưởng)'."
    ,spoilers: "Aerial không chỉ là một cỗ máy mà là nơi trú ngụ linh hồn của Ericht Samaya - người chị gái đã tan biến thể xác năm 4 tuổi trong vụ thảm sát Prologue. Suletta thực chất là một trong những bản sao sinh học (Replicant) được bà mẹ Prospera tạo ra để làm công cụ trả thù Benerit Group qua dự án Quiet Zero."
  },
  {
    id: "after-colony",
    timelineCode: "A.C. (After Colony)",
    title: "Hậu Thuộc Địa – After Colony (A.C. 195)",
    originalYear: "1995 (Gundam Wing) / 1997 (Endless Waltz)",
    protagonist: "Heero Yuy / Duo Maxwell / Trowa Barton / Quatre / Wufei",
    antagonist: "Treize Khushrenada / Zechs Merquise (Milliardo Peacecraft)",
    eraBackground: "Chính phủ Liên minh Địa cầu thống trị bằng bàn tay sắt quân sự và áp bức các Space Colony. Để lật đổ ách thống trị, năm nhà khoa học lưu vong đã bí mật chế tạo 5 cỗ máy Mobile Suit siêu cấp bằng hợp kim Gundanium và gửi 5 thiếu niên đặc nhiệm giáng trần xuống Trái Đất trong chiến dịch mang tên 'Operation Meteor'.",
    keyFactions: [
      {
        name: "Chiến dịch Meteor (Gundam Pilots)",
        flag: "Ngôi sao thiên thạch băng qua bầu trời",
        description: "5 thiếu niên phi công hoạt động độc lập, không liên lạc với nhau, chuyên đột kích phá hủy các cơ sở quân sự chiến lược của đối phương."
      },
      {
        name: "Tổ chức OZ / Tổ chức Hiệp sĩ Romefeller",
        flag: "Đại bàng hoàng gia quý tộc",
        description: "Tổ chức quân sự bí mật nằm trong lòng quân đội Liên minh, tôn thờ tinh thần thượng võ hiệp sĩ cổ điển dưới sự lãnh đạo của Treize Khushrenada."
      }
    ],
    signatureMobileSuits: ["XXXG-00W0 Wing Gundam Zero", "XXXG-01D Deathscythe", "OZ-00MS Tallgeese", "OZ-13MS Epyon"],
    coreTech: {
      name: "ZERO System & Hợp kim Gundanium",
      description: "ZERO System phân tích hàng triệu thông số chiến thuật và nhồi nhét trực tiếp các kịch bản kết liễu vào não phi công, tước bỏ mọi cảm xúc do dự. Hợp kim Gundanium chỉ có thể tôi luyện trong môi trường không trọng lực, đạt độ bền cơ học gần như bất hoại trước đạn pháo thông thường."
    },
    philosophicalThemes: "Chủ nghĩa Hòa bình Tuyệt đối (Absolute Pacifism): Liệu một nền hòa bình không quân đội của vương quốc Sank Kingdom có thể tồn tại mà không bị những kẻ có súng đè bẹp? Nỗi cô đơn của những chiến binh đánh mất mục đích sống khi chiến tranh kết thúc.",
    spoilers: "Treize Khushrenada đã cố tình dàn xếp một cuộc chiến thế giới cuối cùng quy mô lớn để toàn thể nhân loại cảm thấy ghê tởm chiến tranh đến tận cùng tủy sống, qua đó tự nguyện giải trừ toàn bộ vũ khí vĩnh viễn trong Endless Waltz."
  }
];
