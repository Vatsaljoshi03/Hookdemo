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
import useCustom from './pages/useCustom';
import Usememo from './pages/Usememo';
import Sign from './pages/Sign';
import Login from './pages/Login';
import Sidebar from './Component/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import useCount1 from './pages/useCount1';
import Protected from './pages/Protected';
import Logout from './pages/Logout';




const router = createBrowserRouter(

  createRoutesFromElements(


    <Route>
      <Route path="/" element={<Sidebar />}>


        <Route path="*" element={<h1>Page not Found</h1>} />
        
        <Route  element={<Protected />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/about/" element={<About />} />
        <Route path="/usestate" element={<Usestate />} />
        <Route path="/home/about/:id" element={<Store />} />
        <Route path="/useeffect" element={<Useeffect />} />
        <Route path="/usecontext" element={<Usecontext />} />
        <Route path="/useref" element={<Useref />} />
        <Route path="/usereducer" element={<Usereducer />} />
        <Route path="/usecallback" element={<Usecallback />} />
        <Route path="/usememo" element={<Usememo />} />
        <Route path="/usecustom" element={<useCustom />} />
        <Route path="/usecount1" element={<useCount1/>} />
        </Route>


        <Route path="/Sign" element={<Sign />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

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
