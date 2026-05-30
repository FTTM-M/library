import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>Book is all ypu find ...</p>
      </header>
      {children}
      <footer className={styles.footer}>
        developed by <a href="https://github.com/FTTM-M/library">FTTM</a>
      </footer>
    </>
  );
}

export default Layout;
