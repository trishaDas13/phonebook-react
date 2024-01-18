import AddPerson from './copms/AddPerson';
import Information from './copms/Information';
import Layout from "./copms/Layout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
   
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <AddPerson/>
        },
        {
          path:'/information',
          element: <Information/>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
