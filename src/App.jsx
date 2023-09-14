import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelAddToBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };

  // console.log(bookMarks);

  return (
    <div className="container mx-auto px-3 md:p-0">
      <Header></Header>
      <div className="md:flex pt-4 gap-4">
        <Blogs
          handelAddToBookMark={handelAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </div>
  );
}

export default App;
