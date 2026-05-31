function Bookcard({ data: { author, image, language, pages, title } }) {
  return (
    <div>
      <img src={image} title={title} />

      <div>
        <h3>{title}</h3>
        <p>{author}</p>

        <div>
          <span>{language}</span>

          <span>
            {pages}
            pages
          </span>
        </div>
      </div>
    </div>
  );
}

export default Bookcard;
