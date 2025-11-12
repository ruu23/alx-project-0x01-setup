import React from "react";
import Button from "../../components/common/Button";

const Users: React.FC = () => {
  const handleClick = () => {
    alert("User button clicked!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-light">Users Page</h1>
      <Button title="Click Me" onClick={handleClick} />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default Users;
