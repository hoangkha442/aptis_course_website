
import { Link } from 'react-router-dom'
import logo from '../assets/logo_course_website.png'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <section className='absolute bg-transparent w-full z-10'>
      <nav className="">
          <div className="flex px-[50px] items-center py-6">
            <a href="/">
              <img src={logo} alt="" className='w-[382px] object-cover'/>
            </a>
            <div className="flex items-center pr-10 text-center w-full justify-center">
            <ul className="flex items-center gap-10 pr-10 text-[#111] font-bold text-[15px] leading-[1.6]">
                <li className="py-[17px]">
                  <Link to={''} className="border-b-2 text-customPurple border-customPurple pb-[6px]">
                    Trang chủ
                  </Link>
                </li>
                <li className="py-[17px] relative overflow-hidden group">
                  <Link
                    to={''}
                    className="relative text-black pb-[6px] transition-all duration-300 hover:text-customPurple"
                  >
                    Giới thiệu
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-customPurple transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="py-[17px] relative overflow-hidden group">
                  <Link
                    to={''}
                    className="relative text-black pb-[6px] transition-all duration-300 hover:text-customPurple"
                  >
                    Khóa học
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-customPurple transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="py-[17px] relative overflow-hidden group">
                  <Link
                    to={''}
                    className="relative text-black pb-[6px] transition-all duration-300 hover:text-customPurple"
                  >
                    Blog
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-customPurple transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="py-[17px] relative overflow-hidden group">
                  <Link
                    to={''}
                    className="relative text-black pb-[6px] transition-all duration-300 hover:text-customPurple"
                  >
                    Liên hệ
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-customPurple transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
              <div className="flex items-center pl-8 gap-5 relative before:absolute before:top-1/2 before:left-0 before:w-px before:h-10 before:bg-gray-300 before:-translate-y-1/2">
                <button className=' font-semibold text-[#111] text-sm'>Đăng nhập</button>
                <button className='py-3 px-6 bg-[#11111111] rounded-md font-semibold text-[#111] text-sm hover:bg-customPurple hover:text-white transition-all duration-500'>Đăng Ký</button>
              </div>
            </div>
          </div>
      </nav>
    </section>
  )
}