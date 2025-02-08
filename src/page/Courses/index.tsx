import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TitleIntroduction from "../../components/TitleIntroduction/Index";

type Props = {};

export default function Courses({}: Props) {
  useEffect(() => {
    document.title = "Khóa học | Aptis Course";
  }, []);
  return (
    <>
      <Helmet>
        <title>Khóa học | Aptis Course</title>
      </Helmet>
      <TitleIntroduction
        title="Khóa học"
        description="Chinh phục tri thức và mở ra cánh cửa thành công với các khóa học tại trang Web của chúng tôi!"
      />
    </>
  );
}
