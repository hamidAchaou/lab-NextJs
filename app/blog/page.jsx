import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </>
  );
};

export default Blog;
