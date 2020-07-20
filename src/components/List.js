import React from "react";

function List(props) {
  return (
    <tr>
      <td><img src={props.picture}></img></td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.cell}</td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default List;