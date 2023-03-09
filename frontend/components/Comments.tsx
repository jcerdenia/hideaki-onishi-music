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
      }}
    />
  );
};

export default Comments;
