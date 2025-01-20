import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_course_website.png";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

type Props = {};

export default function NavBar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Xác định trạng thái cuộn
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setScrollDirection("down");
        setIsMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      // Kiểm tra nếu đã cuộn qua một khoảng cách nhất định
      setIsScrolled(currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderButton = () => {
    return (
      <div className="flex items-center gap-5">
        <button className="font-semibold text-[#111] text-sm">Đăng nhập</button>
        <button className="py-3 px-6 bg-[#11111111] rounded-md font-semibold text-[#111] text-sm hover:bg-customPurple hover:text-white transition-all duration-500">
          Đăng Ký
        </button>
      </div>
    );
  };

  return (
    <section
      className={`fixed top-0 w-full z-20 transition-transform duration-500 ${
        isScrolled
          ? scrollDirection === "up"
            ? "translate-y-0 bg-white shadow-md"
            : "-translate-y-full  bg-white shadow-md"
          : "translate-y-0 bg-transparent"
      }`}
    >
      <nav>
        <div className="flex px-8 pl-0 xl:px-[50px] items-center py-6 justify-between">
          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[200px] md:w-[300px] object-cover"
            />
          </a>

          {/* Button Group */}
          <div className="xl:hidden inline-block">{renderButton()}</div>

          {/* Hamburger Icon */}
          <div className="xl:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-2xl text-[#111] focus:outline-none"
            >
              {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>

          {/* Menu Links */}
          <div
            className={`fixed top-0 right-0 h-full w-1/3 sm:w-1/4 bg-white shadow-lg z-40 transform transition-transform duration-500 xl:pt-0 pt-16  ${
              isMenuOpen ? "translate-x-0 h-screen" : "translate-x-full h-full"
            } xl:relative xl:translate-x-0 xl:w-auto xl:bg-transparent xl:shadow-none`}
          >
            <ul className="flex flex-col xl:flex-row items-start xl:items-center gap-6 p-8 xl:p-0 text-[#111] font-bold text-[15px] leading-[1.6]">
              <li className="py-[10px]">
                <Link
                  to={"/"}
                  className="border-b-2 text-customPurple border-customPurple pb-[6px]"
                >
                  Trang chủ
                </Link>
              </li>
              <li className="py-[10px] relative overflow-hidden group">
                <Link
                  to={"/introduction"}
                  className="relative text-black pb-[6px] transition-all duration-300 hover:text-customPurple"
                >
                  Giới thiệu
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-customPurple transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-[10px] relative overflow-hidden group">
                <Link
                  to={"/course"}
                  className="relative text-black pb-[6px] transition-all duration-300 hover:text-customPurple"
                >
                  Khóa học
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-customPurple transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-[10px] relative overflow-hidden group">
                <Link
                  to={"/blog"}
                  className="relative text-black pb-[6px] transition-all duration-300 hover:text-customPurple"
                >
                  Blog
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-customPurple transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-[10px] relative overflow-hidden group">
                <Link
                  to={"/contact"}
                  className="relative text-black pb-[6px] transition-all duration-300 hover:text-customPurple"
                >
                  Liên hệ
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-customPurple transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden xl:inline-block">{renderButton()}</div>
        </div>
      </nav>
    </section>
  );
}
