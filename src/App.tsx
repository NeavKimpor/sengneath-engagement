import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Invitation from "./pages/Invitation"
import { useEffect } from "react";


function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // When the app first loads, redirect if not on "/"
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, [])
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/invitation' element={<Invitation/>}/>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  )
}

export default App;