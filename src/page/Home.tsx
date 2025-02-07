import BackToTop from "../components/BackToTop"
import Banner from "./Banner"
import CertiAndDoc from "./CertiAndDoc"
import FAQ from "./FAQ"
import StudySupport from "./StudySupport"
import Testimonials from "./Testimonials"
import Tutor from "./Tutor"

type Props = {}

export default function Home({}: Props) {
  return (
    <>
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