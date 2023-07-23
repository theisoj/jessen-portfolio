import type { GetStaticProps } from "next"
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
}: Props) {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Head>
        <title>Jessen portfolio</title>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocial()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 300,
  }
}
