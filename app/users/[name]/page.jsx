"use client";

import { useEffect, useState } from "react";
import { getUser } from "../../../helpers/api";

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
