export default {
  title: "Posts",
  name: "post",
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
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    },
    {
      title: "Date",
      name: "date",
      type: "datetime",
      validation: (rule) => rule.required(),
    },
    {
      title: "Featured Image",
      name: "featuredImage",
      type: "image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alternative text",
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what's on your page.`,
          options: {
            isHighlighted: false,
          },
        },
      ],
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
