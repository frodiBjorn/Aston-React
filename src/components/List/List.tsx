const List = () => {
  const listItems = ["Item1", "Item2", "Item3", "Item4"];

  return (
    <>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
};

export default List;
