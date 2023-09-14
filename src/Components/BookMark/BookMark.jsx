import PropTypes from "prop-types";

export default function BookMark({ bookMark }) {
  const { title } = bookMark;
  return (
    <div className="bg-slate-200 p-4 m-4 rounded-lg">
      <h3 className="text-base">{title}</h3>
    </div>
  );
}

BookMark.propTypes = {
  bookMark: PropTypes.object,
};
