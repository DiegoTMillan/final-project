import {Routes, Route, Navigate} from "react-router-dom"
import {Home} from "./pages/Home"
import {Login} from "./pages/Login"
import {DashBoard} from "./pages/DashBoard"
import {NotFound} from "./pages/NotFound"
import {GamesTable} from "./pages/GamesTable"
import { Register } from "./pages/Register"

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/games-table" element={<GamesTable/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/404" element={<NotFound />}/>
      <Route path= "*" element={<Navigate to="404" replace />}/>
    </Routes>
  );
}

export default App;
