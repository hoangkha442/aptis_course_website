import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; 
import aboutUs1 from "../../../assets/aboutUs1.jpg";
import aboutUs2 from "../../../assets/aboutUs2.jpg";
import aboutUs3 from "../../../assets/aboutUs3.jpg";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 py-6 sm:py-10 md:py-14 gap-4 md:gap-10">
      {/* Text Section */}
      <div>
        <p className="text-customPurple text-xl sm:text-2xl md:text-3xl font-bold uppercase">Về chúng tôi</p>
        <p className="text-sm sm:text-lg leading-[1.45] text-[#7a7a7a] py-2 sm:py-3 md:py-6">
          Chúng tôi tự hào giới thiệu một nền tảng trực tuyến chuyên cung cấp các khóa học chất lượng cao cho mọi người.
          Với sứ mệnh mang đến tri thức và kiến thức hữu ích, chúng tôi hy vọng có thể đóng góp vào việc phát triển cá nhân
          và nghề nghiệp của bạn.
        </p>
        <button className="text-white bg-[#6003a3] text-sm font-medium sm:py-[14px] py-[10px] sm:px-6 px-4 rounded-md hover:bg-[#7a00c4] transition-all duration-300">
          Tìm hiểu thêm
        </button>
      </div>

      {/* Image Slider Section */}
      <div className="rounded-lg overflow-hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="w-full h-[300px] sm:h-[400px] md:h-full rounded-lg"
        >
          <SwiperSlide>
            <img src={aboutUs1} className="w-full h-full object-cover rounded-lg" alt="About us 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aboutUs2} className="w-full h-full object-cover rounded-lg" alt="About us 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aboutUs3} className="w-full h-full object-cover rounded-lg" alt="About us 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
