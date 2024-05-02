import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import Register from "./components/registration/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import UserProfile from './components/userProfile/UserProfile';

const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
    
      {
        path:"/userProfile",
        element:<UserProfile/>
      }
    
    ]
  }
])

  function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
