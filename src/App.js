import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
          </Routes>
          
      </BrowserRouter>
      
    </>
  );
}

export default App;
