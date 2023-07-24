import { urlFor } from "@/sanity"
import { PageInfo } from "@/typings"
import Link from "next/link"

type Props = {
    pageInfo: PageInfo | undefined
}

export default function Footer({ pageInfo }: Props) {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src={urlFor(pageInfo?.profilePic).url()}
            alt=""
          />
        </div>
      </footer>
    </Link>
  )
}
