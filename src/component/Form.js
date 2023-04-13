import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { addUser } from "../actions/index";
const Form = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const user = {
    id: Date.now(),
    name: "",
    email: "",
    age: "",
  };
  const [person, setPerson] = useState(user);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(person));
    var getName = document.getElementById("name");
    var getEmail = document.getElementById("email");
    var getAge = document.getElementById("age");
    getName.value = "";
    getEmail.value = "";
    getAge.value = "";
    console.log(person);
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
          id="name"
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
          id="email"
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
          id="age"
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
