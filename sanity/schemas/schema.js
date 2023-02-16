// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import schemas here
import site from "./site";
import navigation from "./navigation";
import homePage from "./homePage";
import postsPage from "./postsPage";
import page from "./page";
import section from "./section";
import post from "./post";
import social from "./social";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    site,
    navigation,
    homePage,
    postsPage,
    page,
    section,
    post,
    social,
  ]),
});
