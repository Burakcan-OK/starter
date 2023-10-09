import './App.css';
import logo from './logo.png'
export function Nav () {
    return (
       <nav id="navbar">
        <ul id="nav-ul">
            <li id="nav-li" ><img id="nav-img" src={logo} alt="little-lemon" height="50" width="50"  /></li> 
            <li id="nav-li"> Home</li> 
            <li id="nav-li"> About</li> 
            <li id="nav-li"> Page</li> 
            <li id="nav-li"> Reservation</li> 
            <li id="nav-li">Order Online</li> 
            <li id="nav-li">Login</li> 
       </ul>
       </nav>
    )
}