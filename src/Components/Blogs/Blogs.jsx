import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

export default function Blogs({ handelAddToBookMark, handleMarkAsRead }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="md:w-2/3">
        <h3>Blog: {blogs.length}</h3>
        {blogs.map((blogItem) => (
          <Blog
            key={blogItem.id}
            blog={blogItem}
            handelAddToBookMark={handelAddToBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        ))}
      </div>
    </>
  );
}
Blogs.propTypes = {
  handelAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
