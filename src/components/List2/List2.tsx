import React from "react";

interface ITodo {
  id: number;
  text: string;
}

const data: ITodo[] = [
  {
    id: 1,
    text: "Element 1",
  },
  {
    id: 2,
    text: "Element 2",
  },
  {
    id: 3,
    text: "Element 3",
  },
  {
    id: 4,
    text: "Element 4",
  },
];

const List2 = () => {
  return (
    <React.Fragment>
      {data.map((el) => (
        <li key={el.id}>{el.text}</li>
      ))}
    </React.Fragment>
  );
};

export default List2;
