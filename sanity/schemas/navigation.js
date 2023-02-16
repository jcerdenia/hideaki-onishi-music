export default {
  title: "Navigation",
  name: "navigation",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      readOnly: true,
    },
    {
      title: "Menu Items",
      name: "menuItems",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homePage" }, { type: "postsPage" }, { type: "page" }],
        },
      ],
    },
  ],
};
