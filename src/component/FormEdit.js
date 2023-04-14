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
  const myState = useSelector((state) => state.reducer);
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    console.log(myState);
    const tempList = [...myState];
    const temp = tempList.filter((item) => item.id === id);
    updateUser.name = temp[0].name;
    updateUser.email = temp[0].email;
    updateUser.age = temp[0].age;
    //   console.log("I AM UPDATE");
    //   console.log(updateUser);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUser(...person, id));
    setPerson(updateUser);
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
          //   defaultValue={name}
          defaultValue={person["name"]}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormEdit;
