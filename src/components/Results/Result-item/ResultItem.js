import React from "react";
import { ListGroup } from "react-bootstrap";
const ResultItem = ({ results }) => {
  const users = results.map((item) => item.name);

  return users.map((user) => (
    <ListGroup.Item
      key={user.index}
    >{`${user.first}  ${user.last}`}</ListGroup.Item>
  ));
};

export default ResultItem;
