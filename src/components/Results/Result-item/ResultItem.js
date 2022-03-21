import React from "react";
import { ListGroup } from "react-bootstrap";
const ResultItem = ({ results, query }) => {
  const users = results.map((item) => item.name);

  return (
    query &&
    users
      .filter((user) => user.first.toLowerCase().includes(query))
      .map((user, index) => (
        <ListGroup.Item
          key={index}
        >{`${user.first}  ${user.last}`}</ListGroup.Item>
      ))
  );
};

export default ResultItem;
