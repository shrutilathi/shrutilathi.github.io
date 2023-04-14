import { Route, Routes } from "react-router-dom";
import App from "./App";
import Edit from "./component/Edit";
export default function Routing() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/Edit" element={<Edit/>}/>
      </Routes>
    </>
  );
}