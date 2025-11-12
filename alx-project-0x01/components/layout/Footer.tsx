import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-4 border-t mt-10 bg-gray-50">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} ALX Project. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
