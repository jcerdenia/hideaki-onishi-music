export default {
  title: "Posts Page",
  name: "postsPage",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      readOnly: true,
    },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "section" }],
          weak: true,
        },
      ],
    },
  ],
};
