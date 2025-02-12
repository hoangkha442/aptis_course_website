import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TitleIntroduction from "../../components/TitleIntroduction/Index";
import ContactMap from "./ContactMap";

type Props = {};
export default function Contact({}: Props) {
  useEffect(() => {
    document.title = "Liên hệ | Aptis Course";
  }, []);
  return (
    <>
      <Helmet>
        <title>Liên hệ | Aptis Course</title>
      </Helmet>
      <TitleIntroduction
        title="Liên hệ"
        description="Liên hệ với chúng tôi – Gắn kết và chia sẻ sứ mệnh học tập cùng nhau!"
      />
      <div className="max-w-7xl mx-auto px-8">
        <ContactMap />
      </div>
    </>
  );
}
