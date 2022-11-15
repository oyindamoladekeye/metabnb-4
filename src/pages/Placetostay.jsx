
import Adventure from "../component/Adventure";
import one from "../assets/img1.jpg";
import two from "../assets/img2.jpg";
import three from "../assets/img3.jpg";
import four from "../assets/img4.jpg";
import five from "../assets/img5.jpg";
import six from "../assets/img6.jpg";
import seven from "../assets/img7.jpg";
import eight from "../assets/img8.jpg";
import nine from "../assets/img9.jpg";
import ten from "../assets/img10.jpg";
import eleven from "../assets/img11.jpg";
import twelve from "../assets/img12.jpg";
import thirteen from "../assets/img13.jpg";
import fourteen from "../assets/img14.jpg";
import fifteen from "../assets/img15.jpg";
import sixteen from "../assets/img16.jpg";
import Location from "../component/Location";


function Placetostay() {
    return ( 
        <div>
          <Location />
          <div className="cards">
            <Adventure img={five} />
            <Adventure img={six}/>
            <Adventure img={seven}/>
            <Adventure img={eight}/>
            <Adventure img={one} />
            <Adventure img ={two} />
            <Adventure img={three}/>
            <Adventure img={four}/>
            <Adventure img={nine} />
            <Adventure img={ten}/>
            <Adventure img={eleven}/>
            <Adventure img={twelve}/>
            <Adventure img={thirteen} />
            <Adventure img ={fourteen} />
            <Adventure img={fifteen}/>
            <Adventure img={sixteen}/>
          </div>
        </div>
     );
}

export default Placetostay;