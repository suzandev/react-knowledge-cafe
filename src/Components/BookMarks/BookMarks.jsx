// import BookMark from "../BookMark/BookMark";
import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

export default function BookMarks({ bookMarks, readingTime }) {
  return (
    <>
      <div className="md:w-1/3 bg-green-200 py-4">
        <div className="mb-4 text-center">
          <h3 className="text-base md:text-2xl">
            {" "}
            Reading Time: {readingTime} min
          </h3>
        </div>
        <h3 className="text-center font-bold">BookMarks: {bookMarks.length}</h3>

        {bookMarks.map((bookMark) => (
          <BookMark key={bookMark.id} bookMark={bookMark} />
        ))}
      </div>
    </>
  );
}

BookMarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};
