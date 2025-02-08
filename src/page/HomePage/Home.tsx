import { useEffect } from "react"
import Banner from "./Banner"
import CertiAndDoc from "./CertiAndDoc"
import FAQ from "./FAQ"
import StudySupport from "./StudySupport"
import Testimonials from "./Testimonials"
import Tutor from "./Tutor"
import { Helmet } from "react-helmet-async";
type Props = {}

export default function Home({}: Props) {
  useEffect(() => {
    document.title = "Trang chủ | Aptis Course";
  }, []);
  return (
    <>
      <Helmet>
          <title>Trang chủ | Aptis Course</title>
      </Helmet>
      <Banner />
      <CertiAndDoc />
      <StudySupport />
      <Tutor />
      <Testimonials />
      <FAQ />
    </>
  )
}