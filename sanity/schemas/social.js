export default {
  title: "Socials",
  name: "social",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: (rule) => rule.required(),
    },
  ],
};
