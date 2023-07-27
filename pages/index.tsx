"use client"

import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WorkExperience from "@/components/WorkExperience"
import { Experience, PageInfo, Project, Skill, Social } from "@/typings"
import { fetchPageInfo } from "@/utils/fetchPageInfo"
import { fetchExperiences } from "@/utils/fetchExperiences"
import { fetchSkills } from "@/utils/fetchSkills"
import { fetchProjects } from "@/utils/fetchProjects"
import { fetchSocial } from "@/utils/fetchSocials"
import ContactMe from "@/components/ContactMe"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import { getUrl } from "nextjs-current-url/server"

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

export default function Home({
  projects,
  skills,
  pageInfo,
  experiences,
  socials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-none bg-[rgb(36,36,36)] text-white z-0">
      <Head>
        <title>Jesse Keskelä - Portfolioni</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="tietoja" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="kokemus" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="taidot" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projektit" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="ota-yhteytta" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Footer pageInfo={pageInfo} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  const url = getUrl({ req: context.req })

  const pageInfo: PageInfo = await fetchPageInfo(url?.href!)
  const experiences: Experience[] = await fetchExperiences(url?.href!)
  const skills: Skill[] = await fetchSkills(url?.href!)
  const projects: Project[] = await fetchProjects(url?.href!)
  const socials: Social[] = await fetchSocial(url?.href!)

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  }
}
