export default {
  title: "Home Page",
  name: "homePage",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      readOnly: true,
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
      title: "Hero Title",
      name: "heroTitle",
      type: "string",
      description:
        "Large text featured prominently at the center of the page. Recommended: A tagline or one-line description of what your business is about.",
      validation: (rule) => rule.required(),
    },
    {
      title: "Hero Description",
      name: "heroDescription",
      type: "array",
      description:
        "Text that appears directly under the hero title. Recommended: A short summary of your business and services.",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Primary Action",
      description:
        "A button that can be used to direct your viewers to a particular page or email address",
      name: "primaryAction",
      type: "object",
      fields: [
        {
          type: "string",
          title: "Label",
          name: "label",
        },
        {
          type: "string",
          title: "Link to",
          name: "path",
          description:
            "Action button will link to the given slug or email address",
        },
      ],
    },
    {
      title: "Secondary Action",
      name: "secondaryAction",
      type: "object",
      description:
        "A button that can be used to direct your viewers to a particular page or email address",
      fields: [
        {
          type: "string",
          title: "Label",
          name: "label",
        },
        {
          type: "string",
          title: "Link to",
          name: "path",
          description:
            "Action button will link to the given slug or email address",
        },
      ],
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
