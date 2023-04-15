import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import Login from './components/registration/Login';
import Loader from './components/registration/Loader';
import Signup from './components/registration/Signup';
import Getstart from './components/registration/getstart';
import Chooserole from './components/registration/chooserole';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loader />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/getstart",
      element: <Getstart/>,
    },
    {
      path: "/chooserole",
      element: <Chooserole/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

