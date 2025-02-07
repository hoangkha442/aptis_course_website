import BackToTop from "../components/BackToTop"
import Banner from "./Banner"
import CertiAndDoc from "./CertiAndDoc"
import StudySupport from "./StudySupport"
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
    </>
  )
}