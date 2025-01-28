type Props = {};
import { PlusOutlined } from "@ant-design/icons";

export default function CertiAndDoc({}: Props) {
  return (
    <section className="py-4">
      <div className="text-center max-w-7xl mx-auto px-8 ">
        <p className="text-[14px] leading-[15px] font-medium text-heading mb-[15px] inline-block px-[20px] py-[10px] rounded-full uppercase bg-[#430486] text-white">
          Bạn không cần phải sợ những kỹ năng này nữa
        </p>
        <p className="font-bold text-[34px] xl:leading-[1.1] text-[#192335] bg-gradient-to-r from-[#2f57ef] via-[#7f2eab] to-[#b966e7] text-transparent bg-clip-text">
          Các tài liệu tại Aptis Course Academy
        </p>
      </div>
      <div className="pt-14">
        <div className="overflow-hidden w-full">
          {/* ITEM 1: Scroll right to left */}
<div className="flex items-center space-x-4 animate-scroll pt-5">
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Reading - Bậc B2
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Listening - Bậc B2
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Writing - Bậc B2
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Grammar - Cơ bản
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Vocabulary - Bậc B2
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Practice Test - Bậc B2
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tips & Tricks - Bậc B2
  </a>
</div>

{/* ITEM 2: Scroll left to right */}
<div className="flex items-center space-x-4 py-5 animate-scrollReverse">
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Reading - Bậc C1
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Listening - Bậc C1
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Writing - Bậc C1
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Speaking - Bậc C1
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu Vocabulary - Bậc C1
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Practice Test - Bậc C1
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Advanced Tips & Tricks - Bậc C1
  </a>
</div>

{/* ITEM 3: Scroll right to left */}
<div className="flex items-center space-x-4 pb-5 animate-scroll">
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tổng hợp bài tập Grammar
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Bài tập ngữ pháp nâng cao
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Tài liệu phân tích lỗi sai
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Đề thi Aptis - Tổng hợp
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Mẹo làm bài Aptis
  </a>
  <a href="#" className="aptis-card">
    <PlusOutlined className="mr-2" />
    Kỹ năng Speaking chuyên sâu
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
