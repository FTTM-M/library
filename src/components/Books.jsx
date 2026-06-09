import { useState } from "react";

import { books as bookData } from "../constants/mockData";
import Bookcard from "./Bookcard";
import Favorites from "./Favorites";

import Search from "./Search";
import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const HandleLike = (book, status) => {
    console.log({ book, status });
    if (status) {
      const newLikeList = liked.filter((item) => item.id != book.id);
      setLiked(newLikeList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const BookHandler = () => {
    if (search) {
      const newBook = bookData.filter((book) =>
        book.title.toLowerCase().includes(search),
      );

      setBooks(newBook);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <Search
        search={search}
        Searchhandler={(event) => setSearch(event.target.value.toLowerCase())}
        BookHandler={BookHandler}
      />
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
    </>
  );
}

export default Books;
