import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Invitation from "./pages/Invitation"


function App() {
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