import { DiscussionEmbed } from "disqus-react";

const Comments = ({ post }: any) => {
  return (
    <div className="bg-slate-100 p-4 rounded-md shadow">
      <DiscussionEmbed
        shortname="hideakionishimusic"
        config={{
          url: post.url,
          identifier: post.slug,
          title: post.title,
          language: "en",
        }}
      />
    </div>
  );
};

export default Comments;
