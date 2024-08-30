"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getPost } from "../../../helpers/api";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Fetching the dynamic parameter from URL
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id) {
          const postData = await getPost(id);
          setPost(postData);
        }
      } catch (error) {
        setError("Failed to fetch post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  if (!post) {
    return <p className="text-center text-gray-500 mt-4">Post not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Back
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.thumbnailUrl || "https://via.placeholder.com/600"}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700">{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
