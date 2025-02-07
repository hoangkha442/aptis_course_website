import { useEffect } from "react"
import BackToTop from "../components/BackToTop"
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
      <BackToTop scrollThreshold={200} />
      <Banner />
      <CertiAndDoc />
      <StudySupport />
      <Tutor />
      <Testimonials />
      <FAQ />
    </>
  )
}