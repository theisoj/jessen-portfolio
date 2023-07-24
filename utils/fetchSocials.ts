import axios from "axios";
import { Social } from "../typings";

export const fetchSocial = async (address: string) => {
    const res = await axios.get(`${address}/api/getSocials`);

    const socials: Social[] = res.data.socials;

    console.log("fetching", socials);

    return socials;
};