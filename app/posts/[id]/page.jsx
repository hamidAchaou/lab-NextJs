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
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-300 h-16 w-16 mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-500">
        <i className="fas fa-exclamation-circle fa-2x"></i>
        <p className="text-center mt-4">{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-500">
        <i className="fas fa-times-circle fa-2x"></i>
        <p className="text-center mt-4">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="flex items-center mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-gray-800"
      >
        <i className="fas fa-arrow-left mr-2"></i>
        Back
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <img
          src={post.thumbnailUrl || "https://via.placeholder.com/600"}
          alt={post.title}
          className="w-full h-72 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700">{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
