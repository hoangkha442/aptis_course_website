export default function WhyChooseUs() {
  return (
    <section className="pb-10 pt-2">
      {/* Title */}
      <h2 className="text-customPurple text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center mb-2 md:mb-4 lg:mb-8">
        Tại sao lại chọn chúng tôi?
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-8 text-left">
        {/* Feature 1 - Chất lượng khóa học */}
        <div>
          <h3 className="text-xl font-medium text-customPurple">
            1. Chất lượng khóa học
          </h3>
          <p className="text-sm sm:text-lg text-[#7a7a7a] mt-2 leading-relaxed">
            Chúng tôi cam kết cung cấp những khóa học luyện thi Aptis chất lượng
            cao, bám sát đề thi thật và được hướng dẫn bởi giảng viên có kinh
            nghiệm.
          </p>
        </div>

        {/* Feature 2 - Ngân hàng đề thi đa dạng */}
        <div>
          <h3 className="text-xl font-medium text-customPurple">
            2. Ngân hàng đề thi
          </h3>
          <p className="text-sm sm:text-lg text-[#7a7a7a] mt-2 leading-relaxed">
            Cung cấp kho đề thi thử phong phú, cập nhật liên tục, với đáp án chi
            tiết giúp bạn làm quen với cấu trúc đề thi và cải thiện điểm số
            nhanh chóng.
          </p>
        </div>

        {/* Feature 3 - Lộ trình học cá nhân hóa */}
        <div>
          <h3 className="text-xl font-medium text-customPurple">
            3. Lộ trình học cá nhân hóa
          </h3>
          <p className="text-sm sm:text-lg text-[#7a7a7a] mt-2 leading-relaxed">
            Hệ thống học tập thông minh giúp bạn xây dựng lộ trình luyện thi phù
            hợp với trình độ hiện tại, đảm bảo tối ưu hóa kết quả thi Aptis.
          </p>
        </div>

        {/* Feature 4 - Học tập linh hoạt, hỗ trợ 24/7 */}
        <div>
          <h3 className="text-xl font-medium text-customPurple">
            4. Học tập linh hoạt, 24/7
          </h3>
          <p className="text-sm sm:text-lg text-[#7a7a7a] mt-2 leading-relaxed">
            Bạn có thể luyện thi Aptis mọi lúc, mọi nơi với hệ thống học trực
            tuyến và được hỗ trợ từ giảng viên cùng cộng đồng học viên 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}
