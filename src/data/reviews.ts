import rx78Img from '../assets/images/regenerated_image_1791964167911.jpg';
import nuGundamImg from '../assets/images/regenerated_image_1791964187175.jpg';
import barbatosImg from '../assets/images/regenerated_image_1791964183734.jpg';
import aerialImg from '../assets/images/regenerated_image_1791964184306.jpg';
import strikeFreedomImg from '../assets/images/regenerated_image_1791964182613.jpg';

export interface GunplaReview {
  id: string;
  name: string;
  grade: "EG" | "HG" | "RG" | "MG" | "PG" | "FM";
  scale: string;
  releaseYear: number;
  overallRating: number; // out of 5
  scores: {
    articulation: number; // biên độ pose dáng
    innerFrame: number;    // chi tiết khung xương
    surfaceDetail: number; // chi tiết mặt giáp
    buildEnjoyment: number;// độ sướng khi ráp
    valueForMoney: number; // giá trị trên giá tiền
  };
  priceRefVND: string;
  difficultyRating: number; // 1 to 5
  suitableFor: "Người mới bắt đầu" | "Người chơi phong trào" | "Builder trung cấp" | "Builder kỳ cựu";
  verdict: string;
  pros: string[];
  cons: string[];
  buildNotes: string;
  image: string;
  accent: string;
}

export const GUNPLA_REVIEWS: GunplaReview[] = [
  {
    id: "rg-nu-gundam",
    name: "RG 1/144 RX-93 Nu Gundam",
    grade: "RG",
    scale: "1/144",
    releaseYear: 2019,
    overallRating: 4.9,
    scores: {
      articulation: 5,
      innerFrame: 4.8,
      surfaceDetail: 5,
      buildEnjoyment: 5,
      valueForMoney: 4.8
    },
    priceRefVND: "~950.000 - 1.150.000 VNĐ",
    difficultyRating: 4,
    suitableFor: "Builder trung cấp",
    verdict: "Tượng đài bất tử của dòng Real Grade. Kit đã thay đổi hoàn toàn định kiến về việc RG mỏng manh dễ rơi rụng part; độ vững chãi và ăn khớp hoàn hảo đạt chuẩn 10/10.",
    pros: [
      "Khung xương thế hệ mới lắp từng khối vô cùng chắc nịch, không hề ọp ẹp",
      "Hệ thống Fin Funnel khóa chốt cực kỳ cứng cáp không bị cong rũ khi treo lưng",
      "Cơ chế trượt giáp đùi, bắp chân và vai theo chuyển động mô cơ học",
      "Tỷ lệ cơ thể hiện đại, hầm hố và cao ráo vượt trội so với các kit 1/144 thông thường"
    ],
    cons: [
      "Một số chi tiết giáp vàng nhỏ trên ngực và khớp gối cần cẩn thận khi dùng nhíp",
      "Giá thành ở phân khúc cao nhất của dòng RG"
    ],
    buildNotes: "Hãy xử lý thật kỹ cổng nub ở các thanh Fin Funnel vì đây là phần tiếp xúc trượt vào nhau giữa các phễu năng lượng. Chỉ cần một mẩu nub thừa nhỏ cũng khiến dàn Fin Funnel bị kênh lệch.",
    image: nuGundamImg,
    accent: "#0284c7"
  },
  {
    id: "mg-barbatos",
    name: "MG 1/100 Gundam Barbatos",
    grade: "MG",
    scale: "1/100",
    releaseYear: 2019,
    overallRating: 4.95,
    scores: {
      articulation: 5,
      innerFrame: 5,
      surfaceDetail: 4.8,
      buildEnjoyment: 5,
      valueForMoney: 4.9
    },
    priceRefVND: "~1.050.000 - 1.250.000 VNĐ",
    difficultyRating: 3,
    suitableFor: "Người chơi phong trào",
    verdict: "Kiệt tác Master Grade xuất sắc nhất thập kỷ 2010. Khung xương Gundam Frame màu kim loại bóng kết hợp hệ thống xi lanh mạ bạc hoạt động thực sự khiến bạn chỉ muốn ngắm khung xương mà không nỡ ốp giáp ngoài.",
    pros: [
      "Khung xương Gundam Frame hoàn chỉnh từ đầu đến chân với các pít-tông thủy lực mạ sáng",
      "Vũ khí chùy siêu nặng Mace và đại đao Katana làm bằng chất liệu sắc cạnh",
      "Biên độ gập gối, vặn eo và ngửa cổ vô đối trong phân khúc MG",
      "Rất ít sticker giấy dán, đa phần chi tiết mắt và ngực là nhựa màu xuyên sáng"
    ],
    cons: [
      "Cây chùy quá nặng có thể khiến cổ tay hơi xệ nếu pose dáng đưa ngang một tay trong thời gian dài",
      "Khớp ngón tay dạng tháo lắp thay thế thay vì khớp cử động tự do"
    ],
    buildNotes: "Khuyên bạn nên sơn mạ chrome hoặc đồng thau vào các đường ống dẫn của khung xương trước khi ốp giáp; vẻ đẹp cơ khí sẽ tăng lên gấp nhiều lần.",
    image: barbatosImg,
    accent: "#f97316"
  },
  {
    id: "hg-aerial",
    name: "HG 1/144 Gundam Aerial",
    grade: "HG",
    scale: "1/144",
    releaseYear: 2022,
    overallRating: 4.8,
    scores: {
      articulation: 4.7,
      innerFrame: 3.5,
      surfaceDetail: 4.8,
      buildEnjoyment: 4.9,
      valueForMoney: 5
    },
    priceRefVND: "~320.000 - 420.000 VNĐ",
    difficultyRating: 2,
    suitableFor: "Người mới bắt đầu",
    verdict: "Lựa chọn số 1 thế giới hiện nay cho người mới bắt đầu chơi Gunpla. Đẹp xuất sắc ngay khi lắp mộc không cần sơn, giá mềm và công nghệ đúc in nhiệt In-mold parts tiên tiến.",
    pros: [
      "Công nghệ đúc in hoa văn chìm Permet Score phản quang lấp lánh ở ngực",
      "Khiên Escutcheon tháo rời thành 11 mảnh Bit Staves gắn lên thân máy cực kỳ ấn tượng",
      "Tỷ lệ phân chia màu sắc nhựa tuyệt vời, không dùng khớp polycap cao su cũ kĩ",
      "Mức giá siêu dễ chịu cho học sinh, sinh viên và người mới"
    ],
    cons: [
      "Phần đùi sau cần có giá đỡ Display Base để tái hiện trọn vẹn dàn khiên bay",
      "Một số chi tiết mắt ngực phụ thuộc vào sticker kép trong suốt nếu không có part in nhiệt"
    ],
    buildNotes: "Bạn có thể mua thêm bộ kẹp đế phụ trợ Weapon Display Base để bày hiệu ứng 11 mảnh GUND-BIT bay quanh thân máy như trong phim anime.",
    image: aerialImg,
    accent: "#06b6d4"
  },
  {
    id: "rg-hi-nu-gundam",
    name: "RG 1/144 Hi-Nu Gundam",
    grade: "RG",
    scale: "1/144",
    releaseYear: 2021,
    overallRating: 5,
    scores: {
      articulation: 5,
      innerFrame: 5,
      surfaceDetail: 5,
      buildEnjoyment: 5,
      valueForMoney: 4.9
    },
    priceRefVND: "~1.150.000 - 1.350.000 VNĐ",
    difficultyRating: 4,
    suitableFor: "Builder kỳ cựu",
    verdict: "Chiếc Gunpla hoàn hảo đến mức không thể tìm ra điểm chê. Độ dày dặn cơ bắp, cơ chế giáp bung mở và dàn cánh tên lửa lưng biến cỗ máy thành 'vua của dòng 1/144'.",
    pros: [
      "Cơ chế xòe cánh Fin Funnel và khớp xoay động cơ bình xăng Hyper Megaview hoành tráng",
      "Biên độ chân tay có thể làm được động tác quỳ một chân hoặc đá cao không chút khó khăn",
      "Các tầng giáp màu tím, bạc, trắng phân tầng ba lớp tinh xảo",
      "Độ đầm tay tương đương một mẫu MG 1/100 thu nhỏ"
    ],
    cons: [
      "Thường xuyên trong tình trạng khan hiếm hàng do nhu cầu mua quá lớn trên thị trường",
      "Balo lưng rất nặng, cần cẩn thận điều chỉnh trọng tâm đế"
    ],
    buildNotes: "Bộ giáp bắp chân phía sau có cơ chế trượt mở 3 lớp rất tinh vi, hãy đọc kỹ chiều cài chốt của sách trang 14 để tránh bấm gãy lẫy nhựa mỏng.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    accent: "#6366f1"
  },
  {
    id: "mgex-strike-freedom",
    name: "MGEX 1/100 Strike Freedom Gundam",
    grade: "MG",
    scale: "1/100",
    releaseYear: 2022,
    overallRating: 4.9,
    scores: {
      articulation: 4.8,
      innerFrame: 5,
      surfaceDetail: 5,
      buildEnjoyment: 4.9,
      valueForMoney: 4.5
    },
    priceRefVND: "~3.300.000 - 3.900.000 VNĐ",
    difficultyRating: 4.5,
    suitableFor: "Builder kỳ cựu",
    verdict: "Dòng MGEX (Master Grade Extreme) đẩy giới hạn mạ vàng khung xương lên đỉnh điểm với 6 sắc thái vàng khác biệt (mạ điện, vàng mờ, nhũ đồng, tem kim loại).",
    pros: [
      "Bộ khung kim loại mạ vàng lấp lánh phản chiếu ánh sáng chân thực như báu vật",
      "Đầy đủ tem decal kim loại Metallic 3D dập nổi sang trọng",
      "Đôi cánh Super DRAGOON bung tỏa kích thước bề thế hơn nửa mét khi mở hết cánh",
      "Hộp đóng gói sang trọng đẳng cấp sưu tầm cao cấp"
    ],
    cons: [
      "Giá thành cao ngang ngửa các mẫu PG cỡ lớn",
      "Lớp mạ vàng bóng rất dễ bám vân tay, nên đeo găng tay vải trắng khi thao tác lắp ráp"
    ],
    buildNotes: "Bandai đã bố trí cổng nub dạng 'Under-gate' (cổng giấu dưới đáy giáp) cho hầu hết các part mạ vàng, giúp bạn cắt part mà không để lại sẹo mất lớp mạ trên bề mặt.",
    image: strikeFreedomImg,
    accent: "#eab308"
  },
  {
    id: "eg-rx-78-2",
    name: "Entry Grade 1/144 RX-78-2 Gundam",
    grade: "EG",
    scale: "1/144",
    releaseYear: 2020,
    overallRating: 4.75,
    scores: {
      articulation: 4.5,
      innerFrame: 2,
      surfaceDetail: 4,
      buildEnjoyment: 5,
      valueForMoney: 5
    },
    priceRefVND: "~180.000 - 220.000 VNĐ",
    difficultyRating: 1,
    suitableFor: "Người mới bắt đầu",
    verdict: "Phép màu giá rẻ của Bandai. Chỉ với giá một bữa ăn trưa, bạn có ngay một cỗ máy huyền thoại lắp xong trong 30 phút mà không cần bất kỳ dụng cụ nào.",
    pros: [
      "Tách màu mắt đen viền vàng hoàn toàn bằng nhựa đúc, không cần bất kỳ miếng decal nào",
      "Chỉ cần dùng tay bẻ nhẹ là part rời khỏi vỉ phẳng phiu",
      "Dễ dàng tạo dáng đá chân cao, cầm khiên bắn súng linh hoạt",
      "Vật liệu nhựa PS nguyên sinh cao cấp chịu lực tốt"
    ],
    cons: [
      "Bản cơ bản không đi kèm hiệu ứng tia Beam Saber (chỉ có cán cầm)",
      "Khớp bi mắt cá chân hơi lỏng nếu tạo dáng quá biên độ"
    ],
    buildNotes: "Mẫu kit lý tưởng để bạn thử nghiệm kỹ thuật kẻ lằn panel line hoặc sơn cọ đầu tiên trong đời mà không lo sợ làm hỏng kit đắt tiền.",
    image: rx78Img,
    accent: "#dc2626"
  },
  {
    id: "pg-unleashed-rx78",
    name: "PG Unleashed 1/60 RX-78-2 Gundam",
    grade: "PG",
    scale: "1/60",
    releaseYear: 2020,
    overallRating: 5,
    scores: {
      articulation: 4.9,
      innerFrame: 5,
      surfaceDetail: 5,
      buildEnjoyment: 5,
      valueForMoney: 4.7
    },
    priceRefVND: "~6.200.000 - 7.500.000 VNĐ",
    difficultyRating: 5,
    suitableFor: "Builder kỳ cựu",
    verdict: "Cột mốc vĩ đại nhất lịch sử 40 năm Gunpla. Quy trình lắp ráp mô phỏng chính xác từng công đoạn chế tạo một chiến binh robot ngoài đời thực qua 5 giai đoạn tiến hóa.",
    pros: [
      "Trải nghiệm lắp qua 5 giai đoạn (Khung sườn Truss -> Khung chuyển động -> Hệ thống điện LED -> Lớp giáp lót -> Giáp ngoài)",
      "Có hơn 90 vị trí nắp giáp bảo dưỡng (Hatch Open) mở bung ra để ngắm bộ máy bên trong",
      "Đèn LED RGB đổi màu ma thuật ở mắt và lò phản ứng ngực",
      "Vô số chi tiết kim loại khắc axit Etched Parts và nam châm giữ chốt chắc chắn"
    ],
    cons: [
      "Đòi hỏi ngân sách tài chính lớn và không gian tủ kính trang trọng",
      "Cần chuẩn bị sẵn pin cúc áo cho cụm đèn LED Beam Saber và ngực"
    ],
    buildNotes: "Hãy dành một kỳ nghỉ cuối tuần yên tĩnh để từ từ thưởng thức từng trang sách hướng dẫn như một cuốn sách giáo khoa cơ khí thu nhỏ.",
    image: rx78Img,
    accent: "#ef4444"
  },
  {
    id: "hguc-moon-gundam",
    name: "HGUC 1/144 Moon Gundam",
    grade: "HG",
    scale: "1/144",
    releaseYear: 2018,
    overallRating: 4.85,
    scores: {
      articulation: 5,
      innerFrame: 4.2,
      surfaceDetail: 5,
      buildEnjoyment: 4.9,
      valueForMoney: 4.7
    },
    priceRefVND: "~720.000 - 850.000 VNĐ",
    difficultyRating: 2.5,
    suitableFor: "Người chơi phong trào",
    verdict: "Được mệnh danh là 'HG mang linh hồn của RG'. Kit hoàn toàn không có bất kỳ miếng sticker dán giấy nào, mọi chi tiết xanh lục trên vầng trăng Psycho Plate đều là nhựa màu trong suốt.",
    pros: [
      "100% chi tiết được chia bằng màu nhựa đúc hoàn hảo (Zero Sticker)",
      "Chiếc vòng mặt trăng Psycho Plate ghép từ 8 mảnh phi tiêu khổng lồ uốn cong linh hoạt",
      "Khớp vai rút đa chiều và khớp hông mở rộng chuyển động ngoạn mục",
      "Tặng kèm sẵn một giá đỡ Action Base 5 chính hãng trong hộp"
    ],
    cons: [
      "Mức giá cao hơn mức trung bình của dòng HGUC thông thường",
      "Không có vũ khí Beam Rifle tầm xa (chủ yếu cận chiến với Beam Tomahawk)"
    ],
    buildNotes: "Mặt sau của các mảnh Psycho Plate có thể ghép thành hình vầng trăng khuyết hoặc tách ra làm khiên chắn trước mặt bằng khớp nối có sẵn.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    accent: "#10b981"
  }
];
