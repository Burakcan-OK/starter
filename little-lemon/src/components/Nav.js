import '../App.css';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom';
export function Nav () {
    return (
       <nav id="navbar">
        <ul id="nav-ul">
            <li id="nav-li" ><img id="nav-img" src={logo} alt="little-lemon" height="50" width="50"  /></li> 
            <li id="nav-li"> <Link to="/"  >Home</Link> </li> 
            <li id="nav-li"><Link to="/about"  >About</Link> </li> 
            <li id="nav-li"><Link to="/specials"  >Specials</Link>  </li> 
            <li id="nav-li"><Link to="/Chicago"  >Chicago</Link>  </li> 
            <li id="nav-li"><Link to="/BookingPage"  >Reservation</Link> </li> 
            <li id="nav-li"><Link to="/CustomerSays"  >Comments</Link> </li> 
       </ul>
       
       </nav>
    )
}