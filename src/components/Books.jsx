import { useState } from "react";

import { books } from "../constants/mockData";
import Bookcard from "./Bookcard";
import Favorites from "./Favorites";

function Books() {
  const [liked, setLiked] = useState([]);

  const HandleLike = (book, status) => {
    console.log({ book, status });
    if (status) {
      const newLikeList = liked.filter((item) => item.id != book.id);
      setLiked(newLikeList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  return (
    <div>
      {" "}
      <div>
        {books.map((book) => (
          <Bookcard key={book.id} data={book} HandleLike={HandleLike} />
        ))}
        
      </div>
      {!!liked.length && <div>{liked.map((book)=>(<Favorites  key={book.id} data={book}/>

      ))}</div>}
    </div>
  );
}

export default Books;
