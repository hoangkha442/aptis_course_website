import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import logo from "../assets/logo_course_website.png"
const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Mona Academy" className="w-60 h-20" />
            {/* <h2 className="text-xl font-bold text-purple-800">MONA ACADEMY</h2> */}
          </div>
          <p className="text-gray-600 mt-3">
            Mona Academy chuyên đào tạo và luyện thi chứng chỉ Aptis, giúp học viên nâng cao kỹ năng ngôn ngữ và đạt kết quả tốt nhất trong kỳ thi.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition"><FacebookOutlined className="text-xl" /></a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition"><TwitterOutlined className="text-xl" /></a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition"><YoutubeOutlined className="text-xl" /></a>
          </div>

          {/* CTA Button */}
          <button className="mt-5 px-6 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition flex items-center space-x-2">
            <span>Liên hệ ngay</span> <ArrowRightOutlined />
          </button>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-800 relative pb-2 border-b border-gray-300 after:content-[''] after:w-16 after:h-[2px] after:bg-purple-600 after:absolute after:bottom-[-2px] after:left-0">
            Liên kết
          </h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Trang chủ</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Khoá học</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Tài liệu</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Liên hệ</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-purple-800 relative pb-2 border-b border-gray-300 after:content-[''] after:w-16 after:h-[2px] after:bg-purple-600 after:absolute after:bottom-[-2px] after:left-0">
            Khoá học Aptis
          </h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Luyện thi Aptis General</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Aptis Advanced</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Aptis dành cho giáo viên</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Lộ trình học tập cá nhân</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Đề thi thử & mẹo làm bài</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-purple-800 relative pb-2 border-b border-gray-300 after:content-[''] after:w-16 after:h-[2px] after:bg-purple-600 after:absolute after:bottom-[-2px] after:left-0">
            Liên hệ
          </h3>
          <p className="text-gray-600 mt-4"><strong>Phone:</strong> 0981 044 204</p>
          <p className="text-gray-600"><strong>Email:</strong> chauhoangkha442@gmail.com</p>

          <h3 className="text-lg font-semibold text-purple-800 relative pb-2 border-b border-gray-300 mt-6 after:content-[''] after:w-16 after:h-[2px] after:bg-purple-600 after:absolute after:bottom-[-2px] after:left-0">
            Địa chỉ
          </h3>
          <p className="text-gray-600 mt-4">1027 CMT8, Phường 5, Tân Bình, TP Hồ Chí Minh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
