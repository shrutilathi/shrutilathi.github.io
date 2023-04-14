import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../actions/index";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.reducer);
  const navigate = useNavigate();
  const editRecord = (id) => {
    navigate(`/FormEdit?id=${id}`, { state: { data: myState, id: id } });
  };
  return (
    <>
      <h1>User Details</h1>
      <div>
        <table className="Display">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myState.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      onClick={() => {
                        editRecord(item.id);
                      }}
                      className="btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteUser(item.id))}
                      className="btn-delete"
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
