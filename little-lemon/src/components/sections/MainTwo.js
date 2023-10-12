import '../../App.css';
import pp from '../../assets/pp.jpg'
import restaurant from '../../assets/restaurant.jpg'
export function Maintwo () {
    return(
        <main class="maint-sec">
            <div class="maint-sec1">
                <h1 id="maint-h">Testimonials</h1>
                <section id="pp" class="maint-sec2">
                    <p>Rating</p>
                    <img src={pp} height="30%" width="30%" ></img>
                    <p>Lores</p>
                    <p>Ipsum dolor </p>
                </section>
                <section id="pp1" class="maint-sec2">
                    <p>Rating</p>
                    <img src={pp} height="30%" width="30%" ></img>
                    <p>Lores</p>
                    <p>Ipsum dolor </p>
                </section>
                <section id="pp2" class="maint-sec2">
                    <p>Rating</p>
                    <img src={pp} height="30%" width="30%" ></img>
                    <p>Lores</p>
                    <p>Ipsum dolor </p>
                </section>
            </div>
            <div class="maint-sec3">
                <section style={{color:"#F4CE14"}} >
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua.Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    
                </section>
                <img src={restaurant} width="70%" />
                <section>

                </section>
            </div>
        </main>
    )
}
