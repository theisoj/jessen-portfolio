import { defineType } from "sanity";

export default defineType({
    name: "skill",
    title: "Taito",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Otsikko",
            description: "Taidon otsikko",
            type: "string",
        },
        {
            name: "progress",
            title: "Edistyminen",
            type: "number",
            description: "Taidon edistyminen 0 - 100%",
            validation: (Rule) => Rule.min(0).max(100),
        },
        {
            name: "image",
            title: "Kuva",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
})