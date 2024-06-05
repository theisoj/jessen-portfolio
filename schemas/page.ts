import { defineType } from "sanity"

export default defineType({
    name: "page",
    title: "Sivu",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Otsikko",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "content",
            title: "Sisältö",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
})