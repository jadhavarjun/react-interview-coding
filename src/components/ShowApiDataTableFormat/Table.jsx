import React, { useState, useEffect } from "react";
import "./Table.css";

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  return (
    <>
      <div className="main">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((currUser) => {
                const { id, name, email } = currUser;
                const { street, city, zipcode } = currUser.address;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      {street}, {city}, {zipcode}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
