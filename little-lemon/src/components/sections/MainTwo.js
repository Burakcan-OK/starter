import '../../App.css';
import pp from '../../assets/pp.jpg'
import restaurant from '../../assets/restaurant.jpg'
export function MainTwo () {
    return(
        <main class="maint-sec">
            <div style={{fontSize:"lager"}} class="maint-sec1">
                <h1 id="maint-h">Testimonials</h1>
                <section id="pp" class="maint-sec2">
                    <p>Micheal Caldwell</p>
                    <img src={pp} height="30%" width="30%" alt='' ></img>
                    <p>This is the best Mediterranean food that I've ever had!</p>
                </section>
                <section id="pp1" class="maint-sec2">
                    <p>Alan Chen</p>
                    <img src={pp} height="30%" width="30%" alt='' ></img>
                    <p>My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here</p>
                </section>
                <section id="pp2" class="maint-sec2">
                    <p>Casey Lau</p>
                    <img src={pp} height="30%" width="30%" alt='' ></img>
                    <p>I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.</p>
                </section>
            </div>
            <div class="maint-sec3">
                <section style={{color:"#F4CE14",
                                fontSize:"150%"}} >
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                    Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.
                    </p>
                </section>
                <img src={restaurant} alt='' width="70%" />
                <section>

                </section>
            </div>
        </main>
    )
}
