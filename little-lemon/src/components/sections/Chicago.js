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
                    Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.
                    </p>
                    
                </section>
                <img src={restaurant} width="70%" alt='' />
                <section>

                </section>
            </div>
        </main>
    )
}