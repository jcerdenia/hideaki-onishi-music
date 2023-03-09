import { DiscussionEmbed } from "disqus-react";

const Comments = ({ post }: any) => {
  return (
    <DiscussionEmbed
      shortname="hideakionishimusic"
      config={{
        url: post.url,
        identifier: post.slug,
        title: post.title,
        language: "en",
        apiKey: "",
        sso: {
          name: "SampleNews",
          button: "http://example.com/images/samplenews.gif",
          icon: "http://example.com/favicon.png",
          url: "http://example.com/login/",
          logout: "http://example.com/logout/",
          profile_url: "http://example.com/profileUrlTemplate/{username}",
          width: "800",
          height: "400",
        },
      }}
    />
  );
};

export default Comments;
