import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <RouterProvider router={routes}
      >
      </RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
