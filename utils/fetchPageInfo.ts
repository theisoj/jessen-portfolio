import axios from "axios";
import { PageInfo } from "../typings";

export const fetchPageInfo = async (address: string) => {
    const res = await axios.get(`${address}/api/getPageInfo`);

    const pageInfo: PageInfo = res.data.pageInfo;

    // console.log("fetching", pageInfo);

    return pageInfo;
};