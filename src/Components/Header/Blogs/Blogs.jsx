import { useEffect } from "react";
import { useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <h3>name:</h3>

      {blogs.map((blog) => console.log(blog))}
    </>
  );
}
