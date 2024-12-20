import { useState, useEffect } from "react";
import { BlogPost } from "../../export";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Changed isloading to isLoading for consistency

  const images = [
    "https://picsum.photos/900/300",
    "https://picsum.photos/900/300",
    "https://picsum.photos/900/300",
    "https://picsum.photos/900/300",
  ];

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const result = await res.json();

      setBlogPosts(result.posts);
      console.log(result.posts);
      setIsLoading(false); // Changed isloading(!loading) to setIsLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false); // Ensure loading state is set to false even if there's an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 my-16 h-screen">
      {/* Blog Description */}
      <div className="lg:w-1/2 mb-12">
        <h2 className="text-3xl font-extrabold text-accent">Our Blog</h2>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
        </p>
      </div>
      {/* Blog Posts */}
      <div className="lg:w-1/2 h-full overflow-y-auto px-3 cursor-grab">
        <div className="min-h-[200vh] w-full">
          {!isLoading && // Corrected the usage of isLoading here
            blogPosts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
