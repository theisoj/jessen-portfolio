import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Link from "next/link"
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo | undefined;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hei, minun nimeni on ${pageInfo?.name}`,
      "Jätkä, joka ajattelee liikaa",
      "Mutta tykkää juoda kahvia ja olla tietokoneella",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20 relative">
        <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#tietoja">
            <button className="heroButton">Tietoja</button>
          </Link>

          <Link href="#kokemus">
            <button className="heroButton">Kokemus</button>
          </Link>

          <Link href="#taidot">
            <button className="heroButton">Taidot</button>
          </Link>

          <Link href="#projektit">
            <button className="heroButton">Projektit</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
