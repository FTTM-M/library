import styles from "./Favorites.module.css";

function Favorites({ data: { image, title } }) {
  return (
    <div className={styles.favorites}>
      <div className={styles.list} >
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Favorites;
