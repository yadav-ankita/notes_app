import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Bin from './pages/Bin'
import Important from './pages/Important'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
export default function App() {
  return (
    <div>
      {/* <Navbar />
      <Sidebar/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Archive" element={<Archive/>}></Route>
        <Route path="/Important" element={<Important/>}></Route>
        <Route path="/Bin" element={<Bin/>}></Route>
      </Routes>
    </div>
  )
}
