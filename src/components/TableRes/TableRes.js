import React from "react";
import { Table } from "react-bootstrap";

const TableRes = ({ results }) => {
  console.log(results);
  const users = results.map((user) => user.name);
  console.log(users);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.first}</td>
              <td>{item.last}</td>
              <td>{item.title}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TableRes;
