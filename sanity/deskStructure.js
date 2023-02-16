import S from "@sanity/desk-tool/structure-builder";
import {
  BsGlobe,
  BsList,
  BsHouseDoor,
  BsFileEarmarkText,
} from "react-icons/bs";

export default () => {
  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site")
        .icon(BsGlobe)
        .child(S.document().schemaType("site").documentId("site")),
      S.listItem()
        .title("Navigation")
        .icon(BsList)
        .child(S.document().schemaType("navigation").documentId("navigation")),
      S.divider(),
      S.listItem()
        .title("Home Page")
        .icon(BsHouseDoor)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Posts Page")
        .icon(BsFileEarmarkText)
        .child(S.document().schemaType("postsPage").documentId("postsPage")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["site", "homePage", "postsPage", "navigation"].includes(
            listItem.getId()
          )
      ),
    ]);
};
