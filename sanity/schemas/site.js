import { MdLocalMovies } from "react-icons/md";

export default {
  title: "Site",
  name: "site",
  type: "document",
  icon: MdLocalMovies,
  fields: [
    {
      title: "Site Title",
      name: "title",
      type: "string",
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
      title: "Site Description",
      name: "description",
      description: "About this site",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Author",
      name: "author",
      type: "string",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
    },
    {
      title: "Copyright Notice",
      name: "copyright",
      type: "string",
    },
  ],
};
