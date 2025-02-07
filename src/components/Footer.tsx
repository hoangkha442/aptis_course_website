import { useState } from "react";
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { showToast } from "../utils/toast"; // Import toast function
import logo from "../assets/logo_course_website.png";

const Footer: React.FC = () => {
  const [isCooldown, setIsCooldown] = useState(false);

  // Function to handle click with cooldown
  const handleClick = (item: string) => {
    if (isCooldown) return; // Prevent multiple clicks
    showToast(`Tính năng "${item}" đang phát triển!`, "info");

    setIsCooldown(true);
    setTimeout(() => setIsCooldown(false), 3000); // Cooldown for 3 seconds
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Mona Academy" className="w-60 h-20" />
          </div>
          <p className="text-gray-600 mt-3">
            Mona Academy chuyên đào tạo và luyện thi chứng chỉ Aptis, giúp học viên nâng cao kỹ năng ngôn ngữ và đạt kết quả tốt nhất trong kỳ thi.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a onClick={() => handleClick("Facebook")} className="text-gray-600 hover:text-purple-600 transition cursor-pointer"><FacebookOutlined className="text-xl" /></a>
            <a onClick={() => handleClick("Twitter")} className="text-gray-600 hover:text-purple-600 transition cursor-pointer"><TwitterOutlined className="text-xl" /></a>
            <a onClick={() => handleClick("YouTube")} className="text-gray-600 hover:text-purple-600 transition cursor-pointer"><YoutubeOutlined className="text-xl" /></a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => handleClick("Liên hệ ngay")}
            className="mt-5 px-6 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition flex items-center space-x-2"
          >
            <span>Liên hệ ngay</span> <ArrowRightOutlined />
          </button>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-800 relative pb-2 border-b border-gray-300 after:w-16 after:h-[2px] after:bg-purple-600 after:absolute after:bottom-[-2px] after:left-0 after:animate-moveUnderline">
            Liên kết
          </h3>
          <ul className="mt-4 space-y-2">
            {["Trang chủ", "Khoá học", "Blog", "Tài liệu", "Liên hệ"].map((item) => (
              <li key={item}>
                <a onClick={() => handleClick(item)} className="text-gray-600 hover:text-purple-600 transition cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-purple-800 relative pb-2 border-b border-gray-300 after:w-16 after:h-[2px] after:bg-purple-600 after:absolute after:bottom-[-2px] after:left-0 after:animate-moveUnderline">
            Khoá học Aptis
          </h3>
          <ul className="mt-4 space-y-2">
            {["Luyện thi Aptis General", "Aptis Advanced", "Aptis dành cho giáo viên", "Lộ trình học tập cá nhân", "Đề thi thử & mẹo làm bài"].map((item) => (
              <li key={item}>
                <a onClick={() => handleClick(item)} className="text-gray-600 hover:text-purple-600 transition cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-purple-800 relative pb-2 border-b border-gray-300 after:w-16 after:h-[2px] after:bg-purple-600 after:absolute after:bottom-[-2px] after:left-0 after:animate-moveUnderline">
            Liên hệ
          </h3>
          <p className="text-gray-600 mt-4"><strong>Phone:</strong> 0981 044 204</p>
          <p className="text-gray-600"><strong>Email:</strong> chauhoangkha442@gmail.com</p>

          <h3 className="text-lg font-semibold text-purple-800 relative pb-2 border-b border-gray-300 mt-6 after:w-16 after:h-[2px] after:bg-purple-600 after:absolute after:bottom-[-2px] after:left-0 after:animate-moveUnderline">
            Địa chỉ
          </h3>
          <p className="text-gray-600 mt-4">24 Hồ Tùng Mậu, Dĩ An, TP Bình Dương</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
