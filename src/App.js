import './App.css';
import Form from './component/Form'
const App = () => {
  const handleSubmit = (formData) => {
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
