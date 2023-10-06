import './App.css';
import logo from './logo.png'
export function Nav () {
    return (
       <nav id="navbar">
        <img src={logo} alt="little-lemon-logo" height="50" width="50"  />
        <ul id="nav-ul">
        <li id="nav-li"><a href="www.home.com" ></a> Home</li> 
        <li id="nav-li"><a href="www.about.com" ></a> About</li> 
        <li id="nav-li"><a href="www.page.com" ></a> Page</li> 
        <li id="nav-li"><a href="www.reservation.com" ></a> Reservation</li> 
        <li id="nav-li"><a href="www.ored.com" ></a> Order Online</li> 
        <li id="nav-li"><a href="www.home.com" ></a> Login</li> 
       </ul>
       </nav>
    )
}