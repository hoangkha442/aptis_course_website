import logoNoWord from "../../../assets/logoWithoutWord.png";
import { ContactsFilled, MailFilled, PhoneFilled } from "@ant-design/icons";

type Props = {};

export default function ContactMap({}: Props) {
  return (
    <section className="py-10">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* ITEM 1 */}
        <div className="rounded-sm overflow-hidden lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2489009209276!2d106.66895257457593!3d10.868663957486534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d23ea424af%3A0x1b22e72b8ac9f536!2zNTMgxJAuIFRo4bqhbmggWHXDom4gMjIsIFRo4bqhbmggWHXDom4sIFF14bqtbiAxMiwgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1739350667222!5m2!1svi!2s"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ITEM 2 */}
        <div className="lg:w-1/2">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="w-[163px] h-[163px] mx-auto lg:mx-0">
              <img
                src={logoNoWord}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col lg:items-start items-center space-y-6 p-4">
              {/* Address */}
              <div className="flex items-center space-x-2">
                <ContactsFilled className="text-[#430486] text-xl font-bold" />
                <span className="text-base font-medium text-[#54595F]">
                  1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM
                </span>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <PhoneFilled className="text-[#430486] text-xl font-bold" />
                <span className="text-base font-medium text-[#54595F]">
                  0313728397
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-2">
                <MailFilled className="text-[#430486] text-xl font-bold" />
                <span className="text-base font-medium text-[#54595F]">
                  info@themona.global
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-customPurple text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center">
              Liên hệ với chúng tôi
            </p>
            <div className="px-6 pt-4">
              <form action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Họ và tên*"
                      className="border border-[#ccc] placeholder-gray-800 focus:border-customPurple focus:outline-none text-sm bg-[#f8f8f8] px-4 py-3 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email*"
                      className="border border-[#ccc] placeholder-gray-800 focus:border-customPurple focus:outline-none text-sm bg-[#f8f8f8] px-4 py-3 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Số điện thoại*"
                      className="border border-[#ccc] placeholder-gray-800 focus:border-customPurple focus:outline-none text-sm bg-[#f8f8f8] px-4 py-3 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Địa chỉ*"
                      className="border border-[#ccc] placeholder-gray-800 focus:border-customPurple focus:outline-none text-sm bg-[#f8f8f8] px-4 py-3 rounded-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-4">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Nội dung (nếu có)*"
                    className="border border-[#ccc] placeholder-gray-800 focus:border-customPurple focus:outline-none text-sm bg-[#f8f8f8] px-4 py-3 rounded-md"
                    defaultValue={""}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="mt-4 px-10 bg-[#6003a3] font-bold text-sm text-white py-4 rounded-md hover:bg-customPurple border border-[#ccc] transform transition duration-300 hover:translate-y-[-5px]"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
