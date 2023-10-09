import './App.css';
import restaurant from './restaurant.jpg'
export function Header () {
    return (
    <header id="header">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <article>
            We are a family owned Mediterranean restaurant, focused on traditional reciepe served with a modern twist.
        </article>
        <button width="50px" >Reserve a Table</button>
        <img id="header-img" src={restaurant} width="65%" height="135%" alt="restaurant" />
    </header>
    )
}