import rx78Img from '../assets/images/regenerated_image_1791964167911.jpg';
import zakuImg from '../assets/images/regenerated_image_1791964172214.webp';
import unicornImg from '../assets/images/regenerated_image_1791964177287.jpg';
import strikeFreedomImg from '../assets/images/regenerated_image_1791964182613.jpg';
import wingZeroImg from '../assets/images/regenerated_image_1791964183179.jpg';
import barbatosImg from '../assets/images/regenerated_image_1791964183734.jpg';
import aerialImg from '../assets/images/regenerated_image_1791964184306.jpg';
import sazabiImg from '../assets/images/regenerated_image_1791964185020.jpg';
import nuGundamImg from '../assets/images/regenerated_image_1791964187175.jpg';
import zetaImg from '../assets/images/regenerated_image_1791964185843.jpg';
import strikeImg from '../assets/images/regenerated_image_1791964186526.jpg';

export interface MobileSuit {
  id: string;
  modelNumber: string;
  name: string;
  series: string;
  timeline: string;
  faction: string;
  pilot: string;
  height: string;
  weight: string;
  armorMaterial: string;
  powerplant: string;
  armaments: string[];
  features: string[];
  description: string;
  loreSummary: string;
  popularKits: string[];
  image: string;
  quote: string;
  accentColor: string;
}

export const GUNDAM_DATABASE: MobileSuit[] = [
  {
    id: "rx-78-2",
    modelNumber: "RX-78-2",
    name: "RX-78-2 Gundam",
    series: "Mobile Suit Gundam (1979)",
    timeline: "Universal Century (U.C. 0079)",
    faction: "Earth Federation Forces (EFF)",
    pilot: "Amuro Ray",
    height: "18.0 m",
    weight: "43.4 tấn (tối đa 60.0 tấn)",
    armorMaterial: "Luna Titanium Alloy (Gundarium Alpha)",
    powerplant: "Minovsky Ultracompact Fusion Reactor (1,380 kW)",
    armaments: [
      "2 x 60mm Vulcan Gun (lắp trên đầu)",
      "2 x Beam Saber (công suất 0.38 MW)",
      "1 x BOWA*XBR-M-79-07G Beam Rifle",
      "1 x BLASH*XHB-L-03/N-STD Hyper Bazooka",
      "1 x Gundam Hammer / Hyper Hammer",
      "1 x RX*M-Sh-008/S-01025 Shield"
    ],
    features: [
      "Hệ thống lõi thoát hiểm Core Block System",
      "Hệ điều hành học hỏi Learning Computer",
      "Lớp phủ từ tính Magnetic Coating (nâng cấp sau này)",
      "Biểu tượng khởi nguyên của toàn bộ vũ trụ Mecha thế giới"
    ],
    description: "RX-78-2 là mẫu Mobile Suit huyền thoại được chế tạo trong khuôn khổ Dự án V (Operation V) bí mật của Liên bang Trái Đất. Được điều khiển bởi chàng thiếu niên thiên tài Newtype Amuro Ray, con át chủ bài màu trắng này đã đảo ngược toàn bộ cục diện cuộc Chiến tranh Một Năm (One Year War) và gieo rắc nỗi kinh hoàng cho Công quốc Zeon với biệt danh 'Bóng ma Trắng' (The White Devil).",
    loreSummary: "Được thiết kế bởi kỹ sư Tem Ray tại Colony Side 7. Khi Zeon đột kích, Amuro Ray tình cờ leo lên buồng lái và kích hoạt hệ thống máy tính tự học của Gundam. Nhờ lớp giáp hợp kim Luna Titanium chống chịu được hỏa lực súng máy Zaku thông thường và vũ khí Beam Rifle có sức công phá ngang ngửa pháo hạm, RX-78-2 đã mở ra kỷ nguyên chiến tranh cơ động Mobile Suit.",
    popularKits: ["EG 1/144", "HGUC 1/144 Revive", "RG 1/144 2.0", "MG 1/100 3.0", "PG Unleashed 1/60"],
    image: rx78Img,
    quote: "Ore ga... ichiban Gundam wo umaku tsukaerunda! (Tôi là người sử dụng Gundam thuần thục nhất!)",
    accentColor: "#dc2626"
  },
  {
    id: "ms-06s-zaku-ii",
    modelNumber: "MS-06S",
    name: "Zaku II Commander Type (Char Custom)",
    series: "Mobile Suit Gundam (1979)",
    timeline: "Universal Century (U.C. 0079)",
    faction: "Principality of Zeon",
    pilot: "Char Aznable (The Red Comet)",
    height: "17.5 m",
    weight: "56.2 tấn",
    armorMaterial: "Super-Hard Tensile Steel",
    powerplant: "Minovsky Ultracompact Fusion Reactor (976 kW)",
    armaments: [
      "1 x M-120A1 120mm Zaku Machine Gun",
      "1 x H&L-SB25K/280mmA-P Zaku Bazooka",
      "1 x Heat Hawk Type5",
      "2 x 3-tube Missile Pod (gắn chân)"
    ],
    features: [
      "Ăng-ten chỉ huy hình sừng trên chỏm đầu",
      "Động cơ đẩy tinh chỉnh cho tốc độ gấp 3 lần mẫu thường",
      "Mắt đơn Mono-eye di chuyển linh hoạt",
      "Sơn màu đỏ tươi / hồng cá hồi biểu tượng của Sao Chổi Đỏ"
    ],
    description: "Mẫu Mobile Suit biểu tượng của Zeon được tùy biến riêng cho thiếu tá Char Aznable. Nhờ kỹ năng điều khiển xuất thần kết hợp động cơ phản lực đã tháo bỏ giới hạn an toàn, Char có thể lướt giữa các mảnh vỡ thiên thạch với tốc độ được quân Liên bang đồn đại là 'nhanh gấp ba lần' các cỗ máy Zaku II màu xanh tiêu chuẩn.",
    loreSummary: "Tại trận hải chiến Loum, Char Aznable đã một mình dùng cỗ máy này đánh chìm liên tiếp 5 tàu chiến lớp Magellan và Salamis của Liên Bang, lập nên huyền thoại 'Sao Chổi Đỏ'. Zaku II là hiện thân của thiết kế cơ khí quân sự thực chiến: ống dẫn năng lượng lộ ngoài, khiên gắn vai phải và giáp gai vai trái dùng để húc cận chiến.",
    popularKits: ["HGUC 1/144 Revive", "RG 1/144 Char's Zaku II", "MG 1/100 Ver. 2.0", "PG 1/60 MS-06S"],
    image: zakuImg,
    quote: "Miserawaratte morau ka, Renpou no Mobile Suit no seinou to iu mono wo! (Hãy để ta xem sức mạnh của Mobile Suit Liên bang ra sao!)",
    accentColor: "#ef4444"
  },
  {
    id: "rx-0-unicorn",
    modelNumber: "RX-0",
    name: "RX-0 Unicorn Gundam",
    series: "Mobile Suit Gundam Unicorn (2010)",
    timeline: "Universal Century (U.C. 0096)",
    faction: "Vist Foundation / EFSF Londo Bell",
    pilot: "Banagher Links",
    height: "19.7 m (Unicorn Mode) / 21.7 m (Destroy Mode)",
    weight: "23.7 tấn (tối đa 42.7 tấn)",
    armorMaterial: "Gundarium Alloy",
    powerplant: "Minovsky Ultracompact Fusion Reactor (3,480 kW)",
    armaments: [
      "4 x Beam Saber",
      "1 x Beam Magnum (sức công phá tương đương pháo megagigawatt)",
      "2 x Hyper Bazooka",
      "2 x Beam Gatling Gun",
      "1 x I-Field Generator Shield"
    ],
    features: [
      "Khung xương Full Psycho-Frame bên trong thân máy",
      "Hệ thống NT-D (Newtype Destroyer System)",
      "Biến hình hai dạng Unicorn Mode và Destroy Mode",
      "Hệ thống điều khiển bằng sóng não trực tiếp (La+ Program)"
    ],
    description: "Cỗ máy 'Kỳ Lân' mang hy vọng của Quỹ Vist nhằm tìm kiếm và mở khóa 'Chiếc hộp Laplace'. Ở trạng thái Unicorn Mode, giáp ngoài màu trắng tinh khiết khép kín với một chiếc sừng đơn. Khi phát hiện Newtype đối địch, hệ thống NT-D kích hoạt, khung giáp trượt mở để lộ Psycho-Frame phát ánh sáng đỏ rực rỡ (về sau chuyển xanh ngọc bích tâm linh).",
    loreSummary: "Unicorn Gundam sở hữu súng Beam Magnum uy lực đến mức chỉ cần đường đạn bay sát qua cũng đủ làm tê liệt hoặc xé toạc Mobile Suit đối phương. Khi Psycho-Frame đồng điệu hoàn toàn với tâm trí Banagher Links, cỗ máy vượt qua mọi định luật vật lý thông thường, có thể ngưng đọng thời gian của lò phản ứng hạt nhân và giải trừ vũ khí chỉ bằng một cái phẩy tay.",
    popularKits: ["HGUC 1/144 Destroy Mode", "RG 1/144 Unicorn Gundam", "MG 1/100 Ver. Ka", "PG 1/60 LED Set"],
    image: unicornImg,
    quote: "Soredemo... Mamoritai sekai ga arunda! (Dù vậy... tôi vẫn có một thế giới muốn bảo vệ!)",
    accentColor: "#38bdf8"
  },
  {
    id: "zgmf-x20a-strike-freedom",
    modelNumber: "ZGMF-X20A",
    name: "Strike Freedom Gundam",
    series: "Mobile Suit Gundam SEED Destiny (2004)",
    timeline: "Cosmic Era (C.E. 73)",
    faction: "Terminal / Kingdom of Scandinavia / Orb",
    pilot: "Kira Yamato",
    height: "18.88 m",
    weight: "80.09 tấn",
    armorMaterial: "Variable Phase Shift (VPS) Armor",
    powerplant: "Hyper-Deuterion Nuclear Engine",
    armaments: [
      "8 x EQFU-3X Super DRAGOON Mobile Weapon Wings",
      "2 x MA-M21KF High-energy Beam Rifle (kết hợp tầm xa)",
      "2 x MA-M02G 'Super Lacerta' Beam Saber",
      "2 x MMI-M15E 'Xiphias 3' Railgun (gấp hông)",
      "1 x MGX-2235 'Callidus' Multi-phase Beam Cannon (bụng)",
      "2 x MX2200 Beam Shield"
    ],
    features: [
      "Khung xương bên trong mạ vàng kim tỏa nhiệt",
      "Hệ thống cánh ánh sáng Wings of the Skies",
      "Hệ thống khóa mục tiêu đa điểm Multi-Lock Weapon System",
      "DRAGOON System thế hệ mới điều khiển bằng sóng lượng tử"
    ],
    description: "Đỉnh cao công nghệ của phe liên minh bí mật do Terminal phát triển dành riêng cho 'Ultimate Coordinator' Kira Yamato. Sở hữu hỏa lực hủy diệt tầm xa kết hợp khả năng cơ động thần tốc, Strike Freedom có thể khóa và vô hiệu hóa đồng thời hàng chục mục tiêu trong chớp mắt mà không cần tiêu diệt phi công.",
    loreSummary: "Để đáp ứng tốc độ phản xạ siêu phàm của Kira trong trạng thái SEED Mode, bộ khung trong của Strike Freedom được chế tạo bằng vật liệu mạ vàng dẫn điện cao cấp có khả năng co giãn linh hoạt và phát sáng rực rỡ khi hoạt động hết công suất. Đôi cánh 8 mảnh Super DRAGOON cho phép tấn công bao vây từ mọi góc độ trong không gian ba chiều.",
    popularKits: ["HGCE 1/144 Strike Freedom", "RG 1/144 Strike Freedom", "MG 1/100 Full Burst", "MGEX 1/100 Extreme Detail", "PG 1/60"],
    image: strikeFreedomImg,
    quote: "Omoi dake dewa, fukitsumu koto wa dekinai! (Chỉ với ý nghĩ thôi thì không thể bảo vệ được điều gì!)",
    accentColor: "#eab308"
  },
  {
    id: "xxxg-00w0-wing-zero",
    modelNumber: "XXXG-00W0",
    name: "Wing Gundam Zero (EW)",
    series: "New Mobile Report Gundam Wing: Endless Waltz (1997)",
    timeline: "After Colony (A.C. 195)",
    faction: "Gundam Pilots / Operation Meteor",
    pilot: "Heero Yuy",
    height: "16.7 m",
    weight: "8.0 tấn",
    armorMaterial: "Gundanium Alloy",
    powerplant: "Ultracompact Fusion Reactor (3,732 kW)",
    armaments: [
      "1 x Twin Buster Rifle (hỏa lực tiêu diệt một Space Colony bằng một phát bắn)",
      "2 x Beam Saber",
      "2 x Machine Cannon (gắn vai)"
    ],
    features: [
      "Hệ thống ZERO System kết nối trực tiếp với não bộ phi công",
      "Đôi cánh lông vũ thiên thần có khả năng che chắn và hạ cánh bầu khí quyển",
      "Khung gầm siêu bền bằng hợp kim Gundanium thuần khiết",
      "Chế độ bắn hợp thể Twin Buster Rifle xoay 360 độ"
    ],
    description: "Một trong những thiết kế mecha quyến rũ và ấn tượng nhất lịch sử anime do Katoki Hajime tái thiết kế. Đôi cánh thiên thần trắng muốt cấu tạo từ vô số mảnh tản nhiệt lông vũ tạo nên vẻ đẹp vừa bi tráng vừa uy nghiêm, ẩn chứa bên trong cỗ máy hủy diệt sở hữu khẩu Twin Buster Rifle khét tiếng.",
    loreSummary: "Trái tim của Wing Zero là hệ thống ZERO (Zoning and Emotional Range Omitted). Nó tính toán hàng triệu viễn cảnh tương lai và ép buộc phi công phải thực hiện con đường duy nhất dẫn đến chiến thắng bất chấp cái chết hay thương vong. Chỉ có những phi công có ý chí sắt đá như Heero Yuy mới có thể làm chủ cỗ máy mà không bị phát điên.",
    popularKits: ["RG 1/144 Wing Zero EW", "MG 1/100 Wing Zero Custom Ver.Ka", "HiRM 1/100", "PG 1/60 Pearl Mirror Coating"],
    image: wingZeroImg,
    quote: "Mission accepted. Target confirmed, destroying now.",
    accentColor: "#38bdf8"
  },
  {
    id: "asw-g-08-barbatos-lupus-rex",
    modelNumber: "ASW-G-08",
    name: "Gundam Barbatos Lupus Rex",
    series: "Mobile Suit Gundam IRON-BLOODED ORPHANS (2015)",
    timeline: "Post Disaster (P.D. 323)",
    faction: "Tekkadan",
    pilot: "Mikazuki Augus",
    height: "19.0 m",
    weight: "32.1 tấn",
    armorMaterial: "Nanolaminate Armor",
    powerplant: "2 x Ahab Reactor kết nối song song",
    armaments: [
      "1 x Ultra Large Mace (chùy khổng lồ siêu nặng)",
      "2 x 200mm Gun (gắn cẳng tay)",
      "1 x Tail Blade (đuôi cáp siêu hợp kim linh hoạt)",
      "Rex Nails (móng vuốt kim loại phủ vi điện tích)"
    ],
    features: [
      "Hệ thống giao diện sinh học Alaya-Vijnana System",
      "Khung Gundam Frame thời Calamity War",
      "Cánh tay vượn kéo dài chuyên dụng giáp lá cà",
      "Ánh mắt rực tia sét đỏ khi giải phóng toàn bộ giới hạn"
    ],
    description: "Dạng tiến hóa tối thượng và dã tính nhất của Gundam Barbatos sau khi được xưởng Teiwaz nâng cấp. Lupus Rex (tiếng Latin nghĩa là 'Vua Sói') từ bỏ hoàn toàn các loại súng đạn hoa mỹ để chuyển thành cỗ máy đồ sát cận chiến thuần túy với móng vuốt, đuôi cáp và chiếc chùy thép nặng hàng chục tấn.",
    loreSummary: "Trong trận chiến sinh tử tại tổng hành dinh Gjallarhorn trên sao Hỏa, Mikazuki Augus đã hy sinh hoàn toàn quyền kiểm soát cơ thể cho Alaya-Vijnana System để biến Barbatos thành con quái thú bất tử. Lớp giáp Nanolaminate vô hiệu hóa hầu như mọi đòn tấn công bằng tia Beam năng lượng, biến các trận chiến thời Post Disaster thành những cuộc giáp lá cà đẫm máu.",
    popularKits: ["HG IBO 1/144 Barbatos Lupus Rex", "1/100 Full Mechanics", "Metal Robot Damashii", "MG 1/100 (Dòng Barbatos Base)"],
    image: barbatosImg,
    quote: "Koko ga ore-tachi no ibasho da... Ikuzo, Barbatos! (Đây là nơi thuộc về chúng ta... Đi thôi, Barbatos!)",
    accentColor: "#f97316"
  },
  {
    id: "xvx-016-gundam-aerial",
    modelNumber: "XVX-016",
    name: "Gundam Aerial",
    series: "Mobile Suit Gundam: The Witch from Mercury (2022)",
    timeline: "Ad Stella (A.S. 122)",
    faction: "Shin Sei Development Corporation / Asticassia School",
    pilot: "Suletta Mercury (Ericht Samaya)",
    height: "18.0 m",
    weight: "43.9 tấn",
    armorMaterial: "Permet Composite Armor",
    powerplant: "Permet Electrical Drive Battery Unit",
    armaments: [
      "1 x Beam Rifle (có thể gắn GUND-BIT tăng cường hỏa lực)",
      "2 x Beam Saber",
      "11 x GUND-BIT (Bit Staves tạo thành khiên Escutcheon hoặc vũ khí bay tự hành)"
    ],
    features: [
      "Hệ thống GUND Format thế hệ mới an toàn cho phi công",
      "Permet Score tăng tiến (Score 2, Score 4, Score 6, Score 8)",
      "Khiên Escutcheon phân tách thành 11 Bit Staves linh hoạt",
      "Ý thức sống bên trong của cô bé Eri (Ericht Samaya)"
    ],
    description: "Cỗ máy trung tâm của học viện công nghệ Asticassia do nữ phi công rụt rè Suletta Mercury điều khiển. Khác với những cỗ máy GUND-ARM trước đây cướp đi sinh mạng của người lái do quá tải dòng dữ liệu Datastorm, Aerial chuyển động nhịp nhàng, thanh thoát như một vũ công và coi Suletta như người em gái thân thương.",
    loreSummary: "Được phát triển trong bí mật tại vùng hoang mạc sao Thủy bởi bà Prospera (Elnora Samaya). Bằng cách tích hợp dữ liệu linh hồn của con gái Ericht vào lõi máy tính Permet, Aerial kiểm soát các GUND-BIT với độ chính xác tuyệt đối, tạo nên màn khiên điện từ đánh bật mọi hỏa lực và bẻ gãy mọi chiến thuật hội đồng của đối thủ.",
    popularKits: ["HG WFM 1/144 Gundam Aerial", "Full Mechanics 1/100 Aerial", "SDEX Gundam Aerial", "Chogokin Aerial"],
    image: aerialImg,
    quote: "Nigetara hitotsu, susumeba futatsu te ni hairu! (Nếu lùi bước chỉ giữ được một, nếu tiến bước sẽ giành được hai!)",
    accentColor: "#06b6d4"
  },
  {
    id: "gn-001-gundam-exia",
    modelNumber: "GN-001",
    name: "GN-001 Gundam Exia",
    series: "Mobile Suit Gundam 00 (2007)",
    timeline: "Anno Domini (A.D. 2307)",
    faction: "Celestial Being",
    pilot: "Setsuna F. Seiei",
    height: "18.3 m",
    weight: "57.2 tấn",
    armorMaterial: "E-Carbon",
    powerplant: "GN Drive (Động cơ hạt bán vĩnh cửu)",
    armaments: [
      "1 x GN Sword / GN Rifle (thanh đại kiếm chính có lưỡi đặc chế)",
      "2 x GN Long Blade & GN Short Blade",
      "2 x GN Beam Saber",
      "2 x GN Beam Dagger",
      "1 x GN Shield"
    ],
    features: [
      "Hệ thống 7 thanh kiếm Seven Swords System",
      "Bình xịt hạt quang lượng tử GN Field",
      "Chế độ Trans-Am System (tăng tốc độ gấp 3 lần trong thời gian ngắn)",
      "Khớp nối cơ thể mô phỏng giải phẫu người linh hoạt nhất"
    ],
    description: "Thế hệ thứ 3 của tổ chức vũ trang bí mật Celestial Being chuyên phụ trách cận chiến cự ly siêu gần. Lưỡi kiếm GN Sword của Exia được tráng lớp hạt quang tử đặc biệt có khả năng chém đứt mọi loại giáp carbon kiên cố nhất của 3 khối siêu cường lúc bấy giờ.",
    loreSummary: "Được chế tạo để tiêu diệt các cuộc xung đột vũ trang trên toàn thế giới bằng vũ lực. Phi công Setsuna F. Seiei - một cựu chiến binh nhí từng được Gundam cứu sống thời thơ ấu - đã luôn coi cỗ máy này như hiện thân của một vị cứu tinh tôn giáo, mở đầu cho hành trình thức tỉnh trở thành Innovator thuần chủng đầu tiên của nhân loại.",
    popularKits: ["HG00 1/144 Exia", "RG 1/144 Gundam Exia", "MG 1/100 Exia Ignition Mode", "PG 1/60 Exia Lighting Model"],
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    quote: "Ore ga... Gundam da! (Tôi... chính là Gundam!)",
    accentColor: "#2563eb"
  },
  {
    id: "msn-04-sazabi",
    modelNumber: "MSN-04",
    name: "MSN-04 Sazabi",
    series: "Mobile Suit Gundam: Char's Counterattack (1988)",
    timeline: "Universal Century (U.C. 0093)",
    faction: "Neo Zeon",
    pilot: "Char Aznable (Tổng soái Neo Zeon)",
    height: "25.6 m",
    weight: "30.5 tấn (tối đa 71.2 tấn)",
    armorMaterial: "Gundarium Alloy Composite",
    powerplant: "Minovsky Ultracompact Fusion Reactor (3,960 kW)",
    armaments: [
      "6 x Funnel gắn trên 2 bệ phóng sau lưng",
      "1 x Beam Shot Rifle (vừa bắn tỉa vừa bắn chùm)",
      "1 x Mega Particle Cannon gắn bụng (công suất 8.8 MW)",
      "1 x Beam Tomahawk / Beam Saber cỡ đại",
      "1 x Large Shield tích hợp 3 tên lửa nhỏ"
    ],
    features: [
      "Khung buồng lái gắn Psycho-Frame hình cầu thoát hiểm ở đầu",
      "Dung tích khoang nhiên liệu đẩy khổng lồ cho tác chiến không gian",
      "Thân hình đồ sộ bọc giáp đỏ quyền lực",
      "Công nghệ vũ khí điều khiển không dây Funnel bủa vây mục tiêu"
    ],
    description: "Chiếc Mobile Suit chỉ huy tối thượng do xưởng Anaheim Electronics chế tạo riêng cho Tổng soái Char Aznable trong cuộc Khởi nghĩa Neo Zeon lần thứ hai. Sazabi là sự kết tinh hoàn mỹ giữa vóc dáng khổng lồ, giáp trụ dày đặc và hỏa lực Funnel tâm linh hủy diệt.",
    loreSummary: "Không muốn giành chiến thắng bằng ưu thế công nghệ không công bằng trước kỳ phùng địch thủ Amuro Ray, Char đã bí mật rò rỉ công nghệ hạt Psycho-Frame cho kỹ sư Liên bang để Amuro hoàn thiện chiếc Nu Gundam. Trận đấu tay đôi kinh điển giữa Sazabi và Nu Gundam trên quỹ đạo thiên thạch Axis đã trở thành dấu son chói lọi khép lại mối ân oán giữa hai nhân vật vĩ đại nhất U.C.",
    popularKits: ["HGUC 1/144 Sazabi", "RG 1/144 MSN-04 Sazabi (Được xem là đỉnh cao RG)", "MG 1/100 Sazabi Ver. Ka"],
    image: sazabiImg,
    quote: "Amuro! Naze kore hodo no sainou ga, oroka na Renpou ni tsukaeru no ka! (Amuro! Tại sao tài năng như ngươi lại phục vụ cho Liên bang ngu xuẩn đó!)",
    accentColor: "#dc2626"
  },
  {
    id: "rx-93-nu-gundam",
    modelNumber: "RX-93",
    name: "RX-93 Nu Gundam (ν Gundam)",
    series: "Mobile Suit Gundam: Char's Counterattack (1988)",
    timeline: "Universal Century (U.C. 0093)",
    faction: "Earth Federation Forces / Londo Bell",
    pilot: "Amuro Ray",
    height: "24.2 m",
    weight: "27.9 tấn (tối đa 63.0 tấn)",
    armorMaterial: "Gundarium Alloy",
    powerplant: "Minovsky Ultracompact Fusion Reactor (2,980 kW)",
    armaments: [
      "6 x Fin Funnel gắn lệch bên vai trái tạo dáng bất đối xứng",
      "1 x Beam Rifle tùy chỉnh công suất",
      "1 x New Hyper Bazooka (bắn gián tiếp)",
      "1 x Large Beam Saber (có tia beam phụ ở đuôi chuôi)",
      "1 x Shield tích hợp Beam Cannon & 4 tên lửa"
    ],
    features: [
      "Khung kết cấu gắn hạt Psycho-Frame nhạy cảm với ý thức",
      "Hệ thống Fin Funnel tạo màng chắn năng lượng hình kim tự tháp (Beam Barrier)",
      "Thiết kế cơ học bất đối xứng kinh điển",
      "Hiện tượng tâm linh vĩ đại 'Axis Shock' cứu rỗi Trái Đất"
    ],
    description: "Mẫu Gundam do chính Amuro Ray tham gia thiết kế mọi chi tiết kỹ thuật để đối đầu với Char Aznable. Nu Gundam sở hữu dàn 6 vũ khí Fin Funnel không chỉ dùng để bắn tỉa từ xa mà còn kết nối tạo thành trường lực phòng thủ tuyệt đối trước mọi đòn pháo kích.",
    loreSummary: "Khi thiên thạch khổng lồ Axis đang lao xuống Trái Đất đe dọa tạo nên mùa đông hạt nhân tuyệt chủng, Amuro Ray đã dùng toàn bộ sức đẩy của Nu Gundam để chặn khối đá. Sự cộng hưởng cảm xúc của tất cả phi công hai bên chiến tuyến qua Psycho-Frame đã tạo nên vầng hào quang xanh lục kỳ tích (Axis Shock), đẩy lùi thiên thạch và cứu rỗi nhân loại.",
    popularKits: ["HGUC 1/144 Nu Gundam", "RG 1/144 Nu Gundam (Kiệt tác kỹ thuật)", "MG 1/100 Nu Gundam Ver. Ka", "Metal Structure Kaitai-Shou-Ki"],
    image: nuGundamImg,
    quote: "Nu Gundam wa date ja nai! (Nu Gundam này không phải chỉ để làm cảnh đâu!)",
    accentColor: "#0284c7"
  },
  {
    id: "msz-006-zeta-gundam",
    modelNumber: "MSZ-006",
    name: "MSZ-006 Zeta Gundam",
    series: "Mobile Suit Zeta Gundam (1985)",
    timeline: "Universal Century (U.C. 0087)",
    faction: "AEUG (Anti-Earth Union Group)",
    pilot: "Kamille Bidan",
    height: "19.85 m",
    weight: "28.7 tấn (tối đa 62.3 tấn)",
    armorMaterial: "Gundarium Alloy Gamma",
    powerplant: "Minovsky Ultracompact Fusion Reactor (2,020 kW)",
    armaments: [
      "1 x Beam Rifle (có thể dùng như lựu đạn beam blade)",
      "1 x Hyper Mega Launcher (pháo vác vai cực mạnh)",
      "2 x Beam Saber",
      "2 x 2-tube Grenade Launcher (cổ tay)"
    ],
    features: [
      "Cơ chế biến hình thành phi thuyền đột nhập khí quyển Wave Rider",
      "Khung xương động lực Movable Frame thế hệ 2",
      "Thiết bị cảm biến sóng não Bio-Sensor",
      "Khả năng hấp thu linh hồn của đồng đội đã khuất để tăng công lực"
    ],
    description: "Cỗ máy biến hình huyền thoại do chàng trai trẻ Kamille Bidan phác thảo ý tưởng cơ bản và được tập đoàn Anaheim Electronics hiện thực hóa. Ở dạng Wave Rider, Zeta Gundam có thể tự mình bay thẳng vào bầu khí quyển Trái Đất mà không cần tàu con thoi hỗ trợ.",
    loreSummary: "Zeta Gundam đánh dấu bước nhảy vọt từ khung giáp nguyên khối sang công nghệ Movable Frame (khung xương rời độc lập với lớp giáp ngoài). Trong trận chiến ba phe Gryps Conflict, thiết bị Bio-Sensor của Zeta đã cộng hưởng với năng lượng Newtype cực đại của Kamille, tạo nên lưỡi kiếm khổng lồ và đâm thẳng vào cỗ máy The O của thủ lĩnh Titans Paptimus Scirocco.",
    popularKits: ["HGUC 1/144 Zeta Revive", "RG 1/144 Zeta Gundam", "MG 1/100 Zeta Ver. Ka (Kỷ niệm 20 năm)", "PG 1/60 Zeta"],
    image: zetaImg,
    quote: "Kore ijou, dare mo shinasenai! (Tôi sẽ không để bất kỳ ai phải chết thêm nữa!)",
    accentColor: "#0284c7"
  },
  {
    id: "gat-x105-strike-gundam",
    modelNumber: "GAT-X105",
    name: "GAT-X105 Strike Gundam",
    series: "Mobile Suit Gundam SEED (2002)",
    timeline: "Cosmic Era (C.E. 71)",
    faction: "Earth Alliance / Archangel / Orb",
    pilot: "Kira Yamato / Mu La Flaga",
    height: "17.72 m",
    weight: "64.8 tấn (chưa tính Striker Pack)",
    armorMaterial: "Phase Shift (PS) Armor",
    powerplant: "Ultracompact Energy Battery",
    armaments: [
      "2 x 'Igelstellung' 75mm Multi-barrel CIWS",
      "2 x 'Armor Schneider' Combat Knife (dao găm gập hông)",
      "Aile Striker (Cánh bay phản lực + 2 Beam Saber + Beam Rifle)",
      "Sword Striker (Thanh cự kiếm 'Schwert Gewehr' dài 15.7m)",
      "Launcher Striker (Đại pháo xung kích 320mm 'Agni')"
    ],
    features: [
      "Hệ thống đa năng Striker Pack System thay đổi trang bị tức thì",
      "Giáp Phase Shift đổi màu khi kích hoạt giúp miễn nhiễm đòn vật lý",
      "Hệ điều hành G.U.N.D.A.M. OS viết lại bởi Kira Yamato",
      "Nền tảng của toàn bộ hệ thống phát triển MS của Liên minh Trái Đất"
    ],
    description: "Mẫu duy nhất trong 5 cỗ máy G-Weapons tại Colony Heliopolis không bị lực lượng ZAFT cướp đoạt. Nhờ khả năng hoán đổi linh hoạt 3 gói trang bị Striker Pack (Aile tốc độ cao, Sword cận chiến, Launcher hỏa lực hạng nặng), Strike Gundam trở thành cỗ máy chiến trường thích ứng với mọi địa hình tác chiến.",
    loreSummary: "Điểm đột phá của Strike là lớp giáp Phase Shift (PS Armor). Khi dòng điện chạy qua kim loại, lớp giáp chuyển từ xám trắng sang tông màu đỏ-xanh-trắng và trở nên hoàn toàn miễn nhiễm trước đạn pháo thông thường và tên lửa. Tuy nhiên, PS Armor ngốn pin cực nhanh, đòi hỏi phi công phải quản lý năng lượng tối ưu trong các cuộc giao tranh nghẹt thở.",
    popularKits: ["EG 1/144 Strike", "HGCE 1/144 Aile Strike", "RG 1/144 Aile Strike", "MG 1/100 Remaster", "PG 1/60 Perfect Strike"],
    image: strikeImg,
    quote: "Boku wa... hito wo koroshitaku nante nai! (Tôi... không hề muốn giết người chút nào!)",
    accentColor: "#3b82f6"
  }
];
