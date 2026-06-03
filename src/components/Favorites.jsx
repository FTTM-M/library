function Favorites({ data: { image, title } }) {
  return (
    <div>
      <h4>Favorites</h4>
      <div>
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Favorites;
