import { useState } from "react";

// Import hình ảnh từ assets
import tab1 from "../../assets/tab1.jpg";
import tab2 from "../../assets/tab2.jpg";
import tab3 from "../../assets/tab3.jpg";
import tab4 from "../../assets/tab4.jpg";
import tab5 from "../../assets/tab5.jpg";
import tab6 from "../../assets/tab6.jpg";

// Định nghĩa kiểu dữ liệu của Tab
type Tab = {
  title: string;
  image: string;
};

// Danh sách các tab
const tabs: Tab[] = [
  {
    title: "Rút ngắn thời gian ôn tập",
    image: tab1,
  },
  {
    title: "Tài liệu bài bản, cô đọng, dễ hiểu",
    image: tab2,
  },
  {
    title: "Hỗ trợ và giải đáp thắc mắc 1:1",
    image: tab3,
  },
  {
    title: "Học cùng giảng viên xuất sắc",
    image: tab4,
  },
  {
    title: "Nội dung ôn tập",
    image: tab5,
  },
  {
    title: "Đề thi thử",
    image: tab6,
  },
];

export default function TabsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
      {/* Danh sách tabs */}
      <div className="space-y-2 relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-full text-left px-8 py-6 rounded-lg text-base font-semibold transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#430486] text-white after:content-[''] after:absolute after:top-1/2 after:ml-[2px] after:left-full after:border-l-[20px] after:border-l-[#430486] after:border-y-[12px] after:border-y-transparent after:mt-[-12px] after:opacity-100"
                : "bg-black/5 text-white after:opacity-0"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Hiển thị nội dung của tab */}
      <div className="rounded-xl flex flex-col items-center w-full">
        <img
          src={tabs[activeIndex].image}
          alt={tabs[activeIndex].title}
          className="w-[585px] h-[585px] rounded-lg"
        />
      </div>
    </div>
  );
}
