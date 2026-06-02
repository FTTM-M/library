import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

import styles from "./Bookcard.module.css";

function Bookcard({ data: { author, image, language, pages, title } }) {
  const [like, setLike] = useState(false);

  const Buttonhandler = () => {
    setLike((like) => !like);
  };

  return (
    <div className={styles.card}>
      <img src={image} title={title} />

      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>

        <div>
          <span>{language}</span>

          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={Buttonhandler}>
        <IoIosHeart color={like ? "#EE3324" : "white"} fontSize="2.2rem" />
      </button>
    </div>
  );
}

export default Bookcard;
