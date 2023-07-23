import { defineType } from "sanity";

export default defineType({
    name: "social",
    title: "Sosiaalinen media",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Otsikko",
            description: "Sosiaalisen median alusta",
            type: "string",
        },
        {
            name: "url",
            title: "Somen osoite",
            type: "url",
        },
    ],
})