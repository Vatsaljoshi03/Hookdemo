import {
  createBrowserRouter,
  Route,
  Routes,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import Useeffect from './pages/Useeffect';
import Usestate from './pages/Usestate';
import Usecontext from './pages/Usecontext';
import Useref from './pages/Useref';
import Usereducer from './pages/Usereducer';
import Usecallback from './pages/Usecallback';
import Custom from './pages/Custom';
import Usememo from './pages/Usememo';
import Sign from './pages/Sign';
import Login from './pages/Login';
import Sidebar from './Component/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';




const router = createBrowserRouter(

  createRoutesFromElements(


    <Route>
      <Route path="/" element={<Sidebar />}>

 <Route path="/home/" element={<Home />} />
        <Route path="*" element={<h1>Page not Found</h1>} />

        <Route path="/home/about/" element={<About />} />
        <Route path="/usestate" element={<Usestate />} />
        <Route path="/home/about/:id" element={<Store />} />
        <Route path="/useeffect" element={<Useeffect />} />
        <Route path="/usecontext" element={<Usecontext />} />
        <Route path="/useref" element={<Useref />} />
        <Route path="/usereducer" element={<Usereducer />} />
        <Route path="/usecallback" element={<Usecallback />} />
        <Route path="/usememo" element={<Usememo />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    </Route>



  )
)



function App() {


  return (

    <div className="content">

      <RouterProvider router={router} />

    </div>

  );
}


export default App;
