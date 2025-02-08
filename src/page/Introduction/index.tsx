import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TitleIntroduction from "../../components/TitleIntroduction/Index";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";

type Props = {};

export default function Introduction({}: Props) {
  useEffect(() => {
    document.title = "Giới thiệu | Aptis Course";
  }, []);
  return (
    <>
      <Helmet>
        <title>Giới thiệu | Aptis Course</title>
      </Helmet>

      <TitleIntroduction
        title="Giới thiệu"
        description="Chào mừng đến với trang giới thiệu – Khám phá sứ mệnh và tầm nhìn của chúng tôi trong việc mang tri thức đến cho mọi người!"
      />
      <div className="max-w-7xl mx-auto px-8">
        <AboutUs />
        <WhyChooseUs />
      </div>
    </>
  );
}
