import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
     <RouterProvider router={router}></RouterProvider>
     <Toaster
      position="top-right"
      reverseOrder={false}
      ></Toaster>
    </div>
  );
}

export default App;
