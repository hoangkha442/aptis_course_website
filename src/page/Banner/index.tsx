
import banner from '../../assets/bannerMonaAcademy.png'
import { StarFilled } from '@ant-design/icons';
type Props = {}

export default function Banner({}: Props) {
  return (
    <section className="bg-transparent bg-gradient-to-l from-[#9135DD] to-[#9135DD] transition-all duration-300 mt-0 mb-0 py-[150px] px-0 z-2">
        <div className="bg-transparent bg-gradient-to-b from-white to-white/10 opacity-100 transition-all duration-300 h-[135%] w-full  top-0 absolute"></div>
        <div className="flex relative z-20 max-w-[1340px] mx-auto px-10">
            <div className="p-4 flex">
                <div className='pt-10'>
                    <div className="rating">
                        <StarFilled className='text-yellow-500'/>
                        <StarFilled className='text-yellow-500'/>
                        <StarFilled className='text-yellow-500'/>
                        <StarFilled className='text-yellow-500'/>
                        <StarFilled className='text-yellow-500'/>
                    </div>
                    <p className='text-[#192335] font-semibold text-[18px] leading-[1.45] mb-5'>200+ sinh viên tin tưởng và yêu quý</p>
                    <p className='text-[#192335] text-[56px] font-bold leading-[70px]'>Chinh phục mục tiêu học tập APTIS của bạn với</p>
                    <span className="cd-words-wrapper">
                        <b className="font-bold text-[56px] text-[#192335] bg-gradient-to-r from-[#2f57ef] to-[#b966e7] text-transparent bg-clip-text">Giảng viên xuất sắc.</b>    
                        {/* <b className="theme-gradient is-hidden">Tài liệu đa dạng.</b>
                        <b className="theme-gradient is-hidden">Bài giảng dễ hiểu.</b>  
                        <b className="theme-gradient is-visible">Nội dung bài bản.</b> */}
                    </span>     
                    <p className='font-normal'>Sự <span className='underline'>thành công</span> trong học tập của bạn là <span className='underline'>niềm vui</span> của chúng tôi </p>                   
                </div>
                <img src={banner} alt="" className='w-[620px] h-[620px] object-cover'/>
            </div>
        </div>
    </section>
  )
}