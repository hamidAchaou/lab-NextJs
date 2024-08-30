import Posts from "../posts/page";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Blog</h1>
      <Posts />
    </div>
  );
};

export default Blog;
