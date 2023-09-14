import PropTypes from "prop-types";
import { BsBookmarkStar } from "react-icons/bs";
export default function Blog({ blog, handelAddToBookMark, handleMarkAsRead }) {
  const {
    title,
    authorImg,
    author,
    readingTime,
    postedDate,
    coverImg,
    hashtags,
  } = blog;

  return (
    <div className="space-y-4 mb-11">
      <img
        className="w-full rounded"
        src={coverImg}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src={authorImg}
            alt={`author picture of the ${authorImg}`}
          />
          <div>
            <h3 className="text-sm md:text-lg">{author}</h3>
            <p className="text-sm md:text-lg">{postedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-lg">{readingTime} min read</span>
          <button
            className="text-blue-700"
            onClick={() => handelAddToBookMark(blog)}
          >
            <BsBookmarkStar size={22} />
          </button>
        </div>
      </div>
      <h3 className="text-base md:text-2xl lg:text-4xl">{title}</h3>
      <p className="text-sm">
        {hashtags.map((hash, idx) => (
          <span className="mr-3" key={idx}>
            <a href="" className="text-blue-600">
              {hash}
            </a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-600 font-bold"
        onClick={() => handleMarkAsRead(readingTime)}
      >
        Mark As Read
      </button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
