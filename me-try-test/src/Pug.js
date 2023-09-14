const Pug = (prop) => {
  const { img, name, position, children, index } = prop;
  return (
    <article className="Pug">
      <span className="pugNumber">{`# ${index + 1}`}</span>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <h2>{position}</h2>
      {children}
    </article>
  );
};

export default Pug;
