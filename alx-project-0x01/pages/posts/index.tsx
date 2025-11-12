import React from "react";
import PostCard from "../../components/common/PostCard";

const PostsPage: React.FC = () => {
  const posts = [
    { title: "First Post", content: "This is the content of the first post." },
    { title: "Second Post", content: "Here's what the second post is about." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-light mb-6 text-center">Posts Page</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
