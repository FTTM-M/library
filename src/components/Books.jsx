import { books } from "../constants/mockData";
import Bookcard from "./Bookcard";

function Books() {
  return (
    <div>
      {books.map((book) => (
        // <p>{book.title}</p>
        <Bookcard key={book.id} data={book} />
      ))}
    </div>
  );
}

export default Books;
