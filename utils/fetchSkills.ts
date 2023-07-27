import axios from "axios";
import { Skill } from "../typings";

export const fetchSkills = async (address: string) => {
    const res = await axios.get(`${address}/api/getSkills`);

    const skills: Skill[] = res.data.skills;

    // console.log("fetching", skills);

    return skills;
};