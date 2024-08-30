"use client";

import { useEffect, useState } from "react";
import { getSlug } from "../../../helpers/slugify";
import { getUsers } from "../../../helpers/api";

const getUser = async (name) => {
  try {
    const users = await getUsers();
    return users.find((user) => getSlug(user.name) === name) || null;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
};

const User = ({ params }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(params.name);
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, [params.name]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{user ? user.name : "User Not Found"}</h1>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ) : (
        <p>No user found with the name: {params.name}</p>
      )}
    </>
  );
};

export default User;
