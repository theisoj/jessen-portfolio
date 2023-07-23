import { defineType } from 'sanity'

export default defineType({
  name: "project",
  title: "Projekti",
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Otsikko",
      description: "Projektin otsikko",
      type: "string",
    },
    {
      name: "image",
      title: "Kuva",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Yhteenveto",
      type: "text",
    },
    {
      name: "technologies",
      title: "Teknologiat",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "linkToBuild",
      title: "Linkki projektiin",
      type: "url",
    },
  ]
})
