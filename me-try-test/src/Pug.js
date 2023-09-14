const Pug = (prop) => {
  const { img, name, position, children, index, getId, id } = prop;
  const mopsId = () => {
    getId(id);
  };
  return (
    <article className="Pug">
      <span className="pugNumber">{`# ${index + 1}`}</span>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <h2>{position}</h2>
      <button onClick={mopsId}>Get Id</button>
      {children}
    </article>
  );
};

export default Pug;
