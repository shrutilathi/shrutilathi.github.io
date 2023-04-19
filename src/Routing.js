import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FormEdit from "./component/FormEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "FormEdit",
    element: <FormEdit />,
  },
]);
export default router;
