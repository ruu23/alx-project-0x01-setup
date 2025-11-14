import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="">
      <h1 className="text-center">Users Page</h1>
      <div className="grid grid-cols-2 gap-[70px]">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}


export default Users;
