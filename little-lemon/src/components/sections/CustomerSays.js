import '../../App.css';
import pp from '../../assets/pp.jpg'
export function CustomerSays () {
    return(
        <main class="maint-sec">
            <div class="maint-sec1">
                <h1 id="maint-h">Testimonials</h1>
                <section id="pp" class="maint-sec2">
                    <p>Rating</p>
                    <img src={pp} height="30%" width="30%" alt='' ></img>
                    <p>Lores</p>
                    <p>Ipsum dolor </p>
                </section>
                <section id="pp1" class="maint-sec2">
                    <p>Rating</p>
                    <img src={pp} height="30%" width="30%" alt='' ></img>
                    <p>Lores</p>
                    <p>Ipsum dolor </p>
                </section>
                <section id="pp2" class="maint-sec2">
                    <p>Rating</p>
                    <img src={pp} height="30%" width="30%" alt='' ></img>
                    <p>Lores</p>
                    <p>Ipsum dolor </p>
                </section>
            </div>
        </main>
    )
}