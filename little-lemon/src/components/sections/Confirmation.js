import '../../App.css';
import { Link } from "react-router-dom";
import food from "../../assets/food.jpg"
function Confirmation(){
    return(
        <header className="confirmation-header" >
            <img src={food} alt="" className='confirmation-image'></img>
            <section className="reserve-header-text">
                <h1>Your reservation is Confirmed!</h1>
                <h4>A confirmation message has been sent to your email.</h4>
                <h4>Thanks for dining with us!</h4>
            </section>
            <section>
                <Link className="redirect-button" to="/" >
                    Home Page
                </Link>
            </section>
        </header>
    )
}
export default Confirmation;