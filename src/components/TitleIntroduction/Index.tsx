import { TitleProps } from "../../types"


export default function TitleIntroduction({ title, description}: TitleProps) {
  return (
    <section className="relative z-10 bg-gradient-to-r from-[#430486] to-[#9135DD] py-36 pb-28 h-full">
      {/* Last Image */}
      {/* <div
          className="absolute bottom-[-2px] left-0 w-full h-[145px] bg-cover bg-no-repeat z-[9] "
          style={{ background: `url(https://monaacademy.monamedia.net/wp-content/themes/edumall-child/images/banner-bg-shape-1.svg)`, backgroundPosition: "center center",}}
      ></div> */}
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent bg-gradient-to-b from-white to-white/10 opacity-100 transition-all duration-300"></div>
      <div className="">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </section>
  )
}