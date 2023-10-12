import '../../App.css';
import pp from '../../assets/pp.jpg'
export function CustomerSays () {
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
        </main>
    //     <section className="testimonials">
    //     <article className="testimonials-topbar">
    //             <h1>Testimonials</h1>
    //     </article>


    //     <section className="testimonials-cards">
    //         <Testimonials name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
    //         <Testimonials name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
    //         delicious food here."/>
    //         <Testimonials name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
    //      Little Lemon in flavor and texture."/>
    //         <Testimonials name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to 
    //         treat your kids to."/>
    //         <Testimonials name="Jim Reynor" description="The food here really refreshed me after a late night shift
    //         at the local supply depot."/>
    //         <Testimonials name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast.
    //          The food here tasted so delicious after the trip here."/>
    //         <Testimonials name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place
    //          out at least once if they live in Chicago."/>
    //         <Testimonials name="Jack Hu" description="This restaurant served as a perfect dinner for me after a 
    //         long night of studying. I would definitely order from here again!"/>
    //     </section>

    //     {/* <section className="testimonials-carousel">
    //         <Carousel />
    //     </section> */}
    // </section>
    )
}