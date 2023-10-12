import '../../App.css';
import restaurant from '../../assets/restaurant.jpg'
export function Chicago(){
    return(
        <main class="maint-sec">
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
                <img src={restaurant} width="70%" alt='' />
                <section>

                </section>
            </div>
        </main>
    )
}