import React from "react";
import { RouterProvider } from "react-router-dom";
import { usersRouter } from "./routes/users.routes";

const App = () => {
  return <RouterProvider router={usersRouter} />;
};

export default App;
