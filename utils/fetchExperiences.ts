import { Experience } from "@/typings";
import axios from "axios"


export const fetchExperiences = async (address: string) => {
    const res = await axios.get(`${address}/api/getExperience`);

    const experiences: Experience[] = res.data.experiences;

    console.log("fetching", experiences);

    return experiences;
};
