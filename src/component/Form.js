import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { addUser } from "../actions/index";
const user = {
  name: "",
  email: "",
  age: "",
};

const Form = () => {
  const [person, setPerson] = useState(user);
  const dispatch = useDispatch();
  const mystate = useSelector((state) => state);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ ...person, id: Date.now() }));
    setPerson(user);
  };

  return (
    <form className="App" onSubmit={handleSubmit}>
      <div className="Element">
        <label>Name : </label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          placeholder="Your Name.."
          value={person.name}
        />
      </div>
      <div className="Element">
        <label>Email : </label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder="Your Email.."
          value={person.email}
        />
      </div>
      <div className="Element">
        <label>Age : </label>
        <input
          type="number"
          name="age"
          onChange={handleInputChange}
          placeholder="Your Age.."
          value={person.age}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};
export default Form;
