import { useState } from "react";
import { tutors } from "./data";
import TutorCard from "../../components/TutorCard";
import TutorDetails from "../../components/TutorDetails";

type Props = {};

export default function Tutor({}: Props) {
  const [selectedTutor, setSelectedTutor] = useState(0);
  const fullTutors = [...tutors, ...tutors].slice(0, 5);
  return (
    <section className="bg-[#F2E6FF] sm:py-20 py-10 pb-28 h-full">
      <div className="text-center max-w-7xl mx-auto px-6">
        <p className="text-sm leading-5 md:leading-6 font-medium text-heading inline-block px-5 py-2 rounded-full uppercase bg-[#430486] text-white">
          Câu nào khó - hỏi anh chị Aptis
        </p>
        <p className="font-semibold text-2xl md:text-[32px] leading-7 md:leading-9 xl:leading-[1.1] text-[#333333] py-3">
          Anh chị{" "}
          <span className="bg-gradient-to-r from-[#2f57ef] via-[#7f2fef] to-[#a048cf] text-transparent bg-clip-text">
            Aptis
          </span>
        </p>
        <p className="text-base tracking-wide text-gray-600 px-2 sm:px-10 md:px-16 lg:px-32 xl:px-40 mb-2 md:mb-5">
          Những sinh viên có thành tích xuất sắc và giỏi truyền đạt kiến thức kể
          cả những khái niệm phức tạp nhất. Luôn tận tâm với học viên và có khao
          khát để giúp việc học sinh viên trở nên dễ dàng hơn.
        </p>
        {/* <div className="col-span-1 md:col-span-1"></div> */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {fullTutors.map((tutor, index) => (
            <TutorCard
              key={index}
              name={tutor.name}
              image={tutor.image}
              isActive={selectedTutor === index}
              onClick={() => setSelectedTutor(index)}
            />
          ))}
        </div>

        {/* <div className="col-span-1 md:col-span-1"></div> */}

        {/* Thông tin chi tiết giảng viên */}
        <TutorDetails {...tutors[selectedTutor]} />
      </div>
    </section>
  );
}
