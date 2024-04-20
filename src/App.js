import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Useeffect from './pages/Useeffect';
import Usestate from './pages/Usestate';
import Usecontext from './pages/Usecontext';
import Useref from './pages/Useref';
import Usereducer from './pages/Usereducer';
import Usecallback from './pages/Usecallback';
import Custom from './pages/Custom';
import Usememo from './pages/Usememo';
import Sidebar from './Component/Sidebar';
import Sign from './pages/Sign';
import Login from './pages/Login';

function App() {
  return (

    <BrowserRouter>

      <Sidebar/>

<div className= "content">
        <Routes>
          <Route path="/" element={<Usestate />} />
          <Route path="/usestate" element={<Usestate />} />
          <Route path="/useeffect" element={<Useeffect />} />
          <Route path="/usecontext" element={<Usecontext />} />
          <Route path="/useref" element={<Useref />} />
          <Route path="/usereducer" element={<Usereducer />} />
          <Route path="/usecallback" element={<Usecallback />} />
          <Route path="/usememo" element={<Usememo />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Login" element={<Login />} />


        </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
