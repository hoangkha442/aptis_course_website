import BackToTop from "../components/BackToTop"
import Banner from "./Banner"

type Props = {}

export default function Home({}: Props) {
  return (
    <>
      <Banner />
      <BackToTop scrollThreshold={200} />
    </>
  )
}