import axios from "axios";
import { Project } from "../typings";

export const fetchProjects = async (address: string) => {
    const res = await axios.get(`${address}/api/getProjects`);

    const projects: Project[] = res.data.projects;

    console.log("fetching", projects);

    return projects;
};