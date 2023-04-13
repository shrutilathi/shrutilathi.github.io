import './App.css';
import React, { useState } from "react";
import Form from './component/Form'
import Display from './component/Display';
const App = () => {
  const [ data, setData ] = useState({});
  const handleSubmit = (formData) => {
    setData(formData.person);
    console.log("Form data submitted:", formData.person);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <Display/>
    </div>
  );
};

export default App;
