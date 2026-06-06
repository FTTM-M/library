import { useState } from "react";

import { books } from "../constants/mockData";
import Bookcard from "./Bookcard";
import Favorites from "./Favorites";
import styles from "./Books.module.css";
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
    <div className={styles.container}>
      <div className={styles.card}>
        {books.map((book) => (
          <Bookcard key={book.id} data={book} HandleLike={HandleLike} />
        ))}
      </div>
      {!!liked.length && (
        <div className={styles.favorites}>
          <h4>Favorites</h4>
          {liked.map((book) => (
            <Favorites key={book.id} data={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
