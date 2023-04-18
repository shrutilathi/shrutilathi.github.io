import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const userRecords = useSelector((state) => state.reducer);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const [editPerson] = [...userRecords].filter(
      (item) => item.id.toString() === id
    );
    setPerson(editPerson);
  }, [id, userRecords]);

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
    <form className="app" onSubmit={handleSubmit}>
      <div className="element">
        <label>Name : </label>
        <input
          name="name"
          type="text"
          onChange={handleInputChange}
          placeholder="Enter Updated Name.."
          defaultValue={person.name}
        />
      </div>
      <div className="element">
        <label>Email : </label>
        <input
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="Enter Updated Email.."
          defaultValue={person.email}
        />
      </div>
      <div className="element">
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
