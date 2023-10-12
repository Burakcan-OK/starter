import '../../App.css';
import salad from '../../assets/salad.jpg'
import brucshetta from '../../assets/brucshetta.jpg'
import dessert from '../../assets/lemon_dessert.jpg'
export function Main () {
    return (
        <main style={{color:"black"}}>
            <section id="main-sec1">
                <h1>This weeks specials</h1>
                <button>Online Order</button>
            </section>
            <section id="main-sec2">
                <div>
                    <img id="main-img" src={salad} height= "100px" width="140px" ></img>
                    <div id="main-h4">
                        <h4>Greek Salad</h4>
                        <h4 style={{color:"red"}}>$ 12.99</h4>
                    </div>
                    <article id="main-article">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </article>
                    <article style={{padding:"5px"}}>Order a delivery </article>
                </div>
                <div>
                    <img id="main-img"  src={brucshetta} height= "100px" width="140px"></img>
                    <div id="main-h4">
                        <h4>Bruschetta</h4>
                        <h4 style={{color:"red"}} >$ 5.99</h4>
                    </div>
                    <article id="main-article">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </article>
                    <article style={{padding:"5px"}}>Order a delivery </article>
                </div>
                <div>
                    <img id="main-img"  src={dessert} height= "100px" width="140px"></img>
                    <div id="main-h4">
                        <h4>Lemon Dessert</h4>
                        <h4 style={{color:"red"}}>$ 5.00</h4>
                    </div>
                    <article id="main-article">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </article>
                    <article style={{padding:"5px"}} >Order a delivery </article>
                </div>
            </section>
        </main>
    )
}