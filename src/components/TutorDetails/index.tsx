import React from "react";
import hat from "../../assets/hat.png";
import book from "../../assets/book.png";
import course from "../../assets/course.png";

type TutorDetailsProps = {
  name: string;
  title: string;
  bachelor: string;
  method: string;
  ieltsCourse: string;
  score: string;
  image: string;
};

const TutorDetails: React.FC<TutorDetailsProps> = ({
  name,
  title,
  bachelor,
  method,
  ieltsCourse,
  score,
  image,
}) => {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-6">
      {/* Hình ảnh lớn */}
      <div className="w-full md:w-1/3 flex">
        <img
          src={image}
          alt={name}
          className="w-full md:w-[385px] h-[215px] rounded-xl object-cover"
        />
      </div>

      {/* Thông tin giảng viên */}
      <div className="flex-1 cursor-pointer">
        <div className="text-start">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-800 font-medium">{title}</p>
        </div>

        {/* Chia thành 2 cột */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Cột 1 */}
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <img src={hat} alt="bachelor" className="w-8 h-8 object-cover" />
              <div className="text-start">
                <span className="font-semibold text-[#333333] text-base">
                  Bằng cử nhân:
                </span>
                <p className="text-[#333333]">{bachelor}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img
                src={book}
                alt="teaching method"
                className="w-8 h-8 object-cover"
              />
              <div className="text-start">
                <span className="font-semibold text-[#333333] text-base">
                  Phương pháp giảng dạy:
                </span>
                <p className="text-[#333333]">{method}</p>
              </div>
            </div>
          </div>

          {/* Cột 2 */}
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <img
                src={course}
                alt="ielts course"
                className="w-8 h-8 object-cover"
              />
              <div className="text-start">
                <span className="font-semibold text-[#333333] text-base">
                  IELTS Course:
                </span>
                <p className="text-[#333333]">{ieltsCourse}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img
                src={hat}
                alt="ielts score"
                className="w-8 h-8 object-cover"
              />
              <div className="text-start">
                <span className="font-semibold text-[#333333] text-base">
                  IELTS Overall:
                </span>
                <p className="text-[#333333]">{score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
