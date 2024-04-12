import { defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Työkokemus',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Työn otsikko',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Firman kuva',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'company',
      title: 'Firma',
      type: 'text',
    },
    {
      name: "dateStarted",
      title: "Alkamispäivä",
      type: "date"
    },
    {
      name: "dateEnded",
      title: "Päättymispäivä",
      type: "date"
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "Työskentelee tällä hetkellä",
      initialValue: false,
      type: "boolean"
    },
    {
      name: "technologies",
      title: "Teknologiat",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "skill" }
        }
      ]
    },
    {
      name: "points",
      title: "Pointit",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    }
  ]
})
