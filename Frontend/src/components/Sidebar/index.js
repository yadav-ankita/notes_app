import { NavLink } from 'react-router-dom'; 
import '../../App.css'
export default function Sidebar() {
  return (
    <div className='Sidebar'>
          <NavLink to="/">Home Page</NavLink>
          <NavLink to="/Archive">Archive Page</NavLink>
          <NavLink to="/Important">Important Page</NavLink>
          <NavLink to="/Bin">Bin Page</NavLink>
    </div>
  )
}
    