import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skill as SkillType } from "@/typings"

type Props = {
  skills: SkillType[]
}

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Taidot
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Vie hiiri nykyisen taidon päälle
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {/* Get first half of skills and map */}
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {/* Get second half of skills and map with direction left */}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionTop />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
