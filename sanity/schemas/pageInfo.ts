import { defineType } from 'sanity'

export default defineType({
  name: "pageInfo",
  title: "Sivun tiedot",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nimi",
      type: "string",
    },
    {
      name: "role",
      title: "Rooli",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Kuva",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "backgroundInformation",
      title: "Taustatiedot",
      type: "string",
    },
    {
      name: "profilePic",
      title: "Profiilikuva",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Sähköposti",
      type: "string",
    },
    {
      name: "socials",
      title: "Somet",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ]
})
