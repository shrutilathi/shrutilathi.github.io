import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import "../App.css";
import {addUser} from "../actions/index"
const Form = ({ onSubmit }) => {
  const dispatch=useDispatch();
  const [person, setPerson] = useState({
    id: Date.now(),
    name: "",
    email: "",
    age: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ person });
  };
  
  const handleAddRecord=(event)=>{
    event.preventDefault();
    dispatch(addUser(person));
  }
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
            defaultValue={person.email}
          />
        </div>
        <div className="Element">
          <label>Age : </label>
          <input
            type="number"
            name="age"
            onChange={handleInputChange}
            placeholder="Your Age.."
            defaultValue={person.age}
          />
        </div>
        <div>
          <button onClick={handleAddRecord}>Submit</button>
        </div>
      </form>
  );
};

export default Form;
