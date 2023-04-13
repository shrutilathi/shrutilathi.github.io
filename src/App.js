import "./App.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./component/Form";
import Display from "./component/Display";
import { addUser } from "./actions/index";
const App = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleSubmit = (formData) => {
    setData(formData.person);
    console.log("Form data submitted:", formData.person);
    dispatch(addUser(formData.person));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <Display />
    </div>
  );
};

export default App;
