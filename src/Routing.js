import { Route, Routes } from "react-router-dom";
import App from "./App";
import FormEdit from "./component/FormEdit";
export default function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/FormEdit" element={<FormEdit />} />
    </Routes>
  );
}
