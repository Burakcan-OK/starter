import './App.css';
import logo from './logo.png'
export function Footer () {
    return (
        <footer id="footer">
            <div class="foot">
                <img id="foot-img" src={logo} height="30" width="30" />
                <p>copyright LITTLE LEMON</p>
            </div>
            <div >
               <h4>Doormat Navigation</h4>
               <h5>Home</h5>
               <h5>About</h5>
               <h5>Menu</h5>
               <h5>Reservation</h5>
               <h5>Order Online</h5>
               <h5>Login</h5>
            </div>
            <div >
                <h4>Contact</h4>
                <h5>Address</h5>
                <h5>Phone Number</h5>
                <h5>Email</h5>
            </div>
            <div >
                <h4>Social Media Links</h4>
                <h5>Address</h5>
                <h5>Phone Number</h5>
                <h5>Email</h5>
            </div>
        </footer>
    )
}