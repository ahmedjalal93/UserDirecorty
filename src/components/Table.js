import React from "react";
import List from "../components/List"

function Table(props) {
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Date of birth</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((item, index) => {
              return (<List key={index} picture={item.picture.medium} name={`${item.name.first} ${item.name.last}`} email={item.email} cell={item.cell} dob={item.dob.date.substring(0, item.dob.date.indexOf("T"))} />)
            }
            )}
        </tbody>
    </table>
  );
}

export default Table;