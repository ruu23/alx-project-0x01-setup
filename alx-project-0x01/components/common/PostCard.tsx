import React from "react";

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default PostCard;
