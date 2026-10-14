export interface ChecklistItem {
  id: string;
  stage: string;
  task: string;
  tip: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

export const DEFAULT_CHECKLIST_STAGES = [
  "1. Chuẩn bị & Soát Runner",
  "2. Khung ngực & Buồng lái (Torso)",
  "3. Phần đầu & Sừng cảm biến (Head)",
  "4. Đôi cánh tay & Vai (Arms & Shoulders)",
  "5. Khung chậu & Giáp hông (Waist)",
  "6. Đôi chân & Bàn chân (Legs & Feet)",
  "7. Balo phản lực & Vũ khí (Backpack & Weapons)",
  "8. Xử lý Nub & Kẻ lằn chìm (Panel Lining)",
  "9. Dán Decal & Hoàn thiện (Decals & Topcoat)"
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  {
    id: "prep-1",
    stage: "1. Chuẩn bị & Soát Runner",
    task: "Kiểm tra số lượng vỉ runner so với danh sách đầu sách hướng dẫn",
    tip: "Giữ nguyên nilon bao bì cho đến khi đối chiếu xong toàn bộ các vỉ A, B, C...",
    completed: true,
    priority: "high"
  },
  {
    id: "prep-2",
    stage: "1. Chuẩn bị & Soát Runner",
    task: "Lau sạch bụi bề mặt vỉ hoặc rửa runner bằng nước ấm pha nước rửa bát loãng nếu có dầu khuôn",
    tip: "Giúp sơn và decal bám dính tốt hơn gấp 2 lần.",
    completed: false,
    priority: "low"
  },
  {
    id: "prep-3",
    stage: "1. Chuẩn bị & Soát Runner",
    task: "Sắp xếp vỉ runner lên khay đỡ theo thứ tự bảng chữ cái",
    tip: "Tiết kiệm 50% thời gian tìm kiếm part khi ráp.",
    completed: true,
    priority: "medium"
  },
  {
    id: "torso-1",
    stage: "2. Khung ngực & Buồng lái (Torso)",
    task: "Lắp ráp khối buồng lái Cockpit và đặt phi công ngồi đúng khớp",
    tip: "Nếu muốn sơn phi công, hãy sơn trước khi đóng nắp giáp ngực.",
    completed: false,
    priority: "medium"
  },
  {
    id: "torso-2",
    stage: "2. Khung ngực & Buồng lái (Torso)",
    task: "Kiểm tra trục bi khớp cổ và khớp vai trước khi bấm ngàm kín",
    tip: "Xoay thử khớp một góc 360 độ nhẹ nhàng, nếu quá chật hãy mài bớt viền trục.",
    completed: false,
    priority: "high"
  },
  {
    id: "head-1",
    stage: "3. Phần đầu & Sừng cảm biến (Head)",
    task: "Dán decal phản quang mắt hoặc lắp cụm chi tiết mắt trong suốt",
    tip: "Dùng nhíp đầu cong và tăm bông miết góc cạnh mắt.",
    completed: false,
    priority: "high"
  },
  {
    id: "head-2",
    stage: "3. Phần đầu & Sừng cảm biến (Head)",
    task: "Lắp sừng V-fin cẩn thận, gọt mẩu an toàn (Safety Flags) nếu muốn đầu nhọn chuẩn anime",
    tip: "Sừng V-fin là bộ phận giòn nhất trên Gunpla, nhẹ tay hết mức.",
    completed: false,
    priority: "medium"
  },
  {
    id: "arms-1",
    stage: "4. Đôi cánh tay & Vai (Arms & Shoulders)",
    task: "Lắp ráp khung xương khuỷu tay 2 đốt (Double Joint)",
    tip: "Uốn cong thử khớp gập 180 độ xem có bị vướng cuống nhựa thừa hay không.",
    completed: false,
    priority: "high"
  },
  {
    id: "arms-2",
    stage: "4. Đôi cánh tay & Vai (Arms & Shoulders)",
    task: "Kiểm tra khớp giáp vai và cổ tay thay thế bàn tay nắm/xòe/cầm súng",
    tip: "Không ép bàn tay vào trục khi chưa lựa đúng rãnh.",
    completed: false,
    priority: "medium"
  },
  {
    id: "waist-1",
    stage: "5. Khung chậu & Giáp hông (Waist)",
    task: "Cắt đôi chốt nối giáp váy trước (Front Skirt mod) để hai vạt váy hoạt động độc lập",
    tip: "Một mẹo kinh điển cho dòng HG: cắt thanh ngang ở giữa khớp bi váy trước giúp cử động đá chân không bị kéo theo cả hai bên.",
    completed: false,
    priority: "medium"
  },
  {
    id: "legs-1",
    stage: "6. Đôi chân & Bàn chân (Legs & Feet)",
    task: "Lắp ráp cụm khớp đùi, khớp gối và mắt cá chân",
    tip: "Xử lý triệt để nub mark ở mặt sau đùi và bắp chân trước khi ráp ốp giáp ngoài.",
    completed: false,
    priority: "high"
  },
  {
    id: "legs-2",
    stage: "6. Đôi chân & Bàn chân (Legs & Feet)",
    task: "Kiểm tra độ cân bằng hai đế bàn chân trên mặt phẳng bàn",
    tip: "Đảm bảo mô hình có thể đứng vững mà không cần giá đỡ.",
    completed: false,
    priority: "high"
  },
  {
    id: "weapons-1",
    stage: "7. Balo phản lực & Vũ khí (Backpack & Weapons)",
    task: "Lắp ráp súng Beam Rifle, Khiên và chuôi kiếm Beam Saber",
    tip: "Gọt phẳng đường nối ghép khuôn (seamline) trên nòng súng.",
    completed: false,
    priority: "medium"
  },
  {
    id: "finish-1",
    stage: "8. Xử lý Nub & Kẻ lằn chìm (Panel Lining)",
    task: "Dùng bút hoặc nước kẻ lằn Tamiya Accent Color kẻ rãnh toàn bộ chi tiết giáp",
    tip: "Màu xám cho giáp trắng, màu đen cho giáp sẫm, màu nâu cho giáp đỏ/vàng.",
    completed: false,
    priority: "high"
  },
  {
    id: "finish-2",
    stage: "8. Xử lý Nub & Kẻ lằn chìm (Panel Lining)",
    task: "Lau sạch vết mực lem bằng tăm bông thấm nhẹ dầu Zippo",
    tip: "Lau dứt khoát vuông góc với đường rãnh kẻ.",
    completed: false,
    priority: "medium"
  },
  {
    id: "finish-3",
    stage: "9. Dán Decal & Hoàn thiện (Decals & Topcoat)",
    task: "Dán tem cảnh báo Caution Decal theo sơ đồ mẫu",
    tip: "Dùng Mark Setter để tem bám chắc không bong tróc.",
    completed: false,
    priority: "high"
  },
  {
    id: "finish-4",
    stage: "9. Dán Decal & Hoàn thiện (Decals & Topcoat)",
    task: "Phun 2 lớp phủ bảo vệ mờ Flat Matte Topcoat trong ngày khô ráo",
    tip: "Khử ánh bóng nhựa đồ chơi, khóa chặt decal và bảo tồn tác phẩm nhiều năm.",
    completed: false,
    priority: "high"
  }
];
