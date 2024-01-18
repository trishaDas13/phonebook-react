import AddPerson from './copms/AddPerson';
import Information from './copms/Information';
import Layout from "./copms/Layout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersonProvider } from './context/Context'

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
      <PersonProvider>
        <RouterProvider router={router} />
      </PersonProvider>
    </div>
  );
}

export default App;
