import Login from "./loginPage/Login";
import React from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./homePage/Home";
import Detial from "./detialPage/Detial";
const router = createBrowserRouter([
  {
    path : '/',
    element :  <Login/>
  },
  {
    path : '/Home',
    element : <Home/>
  },
  {
    path: '/Home/Detial',
    element : <Detial/>
  }
 
])

function App() {
  return (
  <React.StrictMode>

    <RouterProvider router={router}/>
  </React.StrictMode>

  );
}

export default App;
