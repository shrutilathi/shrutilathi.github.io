import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../actions/index";
import "../App.css";
import { Link } from "react-router-dom";

const Display = () => {
  const dispatch = useDispatch();
  const userRecords = useSelector((state) => state.reducer);
  return (
    <>
      <h1>User Details</h1>
      <div>
        <table className="display">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userRecords.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className="edit-button">
                      <Link to={`/FormEdit?id=${item.id}`}> Edit</Link>
                    </button>
                    <button
                      onClick={() => dispatch(deleteUser(item.id))}
                      className="delete-button"
                    >
                      Delete
                    </button>
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

export default Display;
