import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editUser } from "../actions/index";

const updateUser = {
  name: "",
  email: "",
  age: "",
};
const FormEdit = () => {
  const [person, setPerson] = useState(updateUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myState = useSelector((state) => state.reducer);
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const [temp] = [...myState].filter((item) => item.id === id);
    setPerson(temp);
  }, [id, myState]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUser(person, id));
    navigate("/");
  };
  return (
    <form className="App" onSubmit={handleSubmit}>
      <div className="Element">
        <label>Name : </label>
        <input
          name="name"
          type="text"
          onChange={handleInputChange}
          placeholder="Enter Updated Name.."
          defaultValue={person.name}
        />
      </div>
      <div className="Element">
        <label>Email : </label>
        <input
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="Enter Updated Email.."
          defaultValue={person.email}
        />
      </div>
      <div className="Element">
        <label>Age : </label>
        <input
          name="age"
          type="number"
          onChange={handleInputChange}
          placeholder="Enter Updated Age.."
          defaultValue={person.age}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormEdit;
