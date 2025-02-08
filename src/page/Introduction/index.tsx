import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

type Props = {}

export default function Introduction({}: Props) {
    useEffect(() => {
        document.title = "Giới thiệu | Aptis Course";
      }, []);
  return (
    <>
        <Helmet>
            <title>Giới thiệu | Aptis Course</title>
        </Helmet>
    </>
  )
}