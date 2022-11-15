import Adventure from "./Adventure";
import one from "../assets/img1.jpg";
import two from "../assets/img2.jpg";
import three from "../assets/img3.jpg";
import four from "../assets/img4.jpg";
import five from "../assets/img5.jpg";
import six from "../assets/img6.jpg";
import seven from "../assets/img7.jpg";
import eight from "../assets/img8.jpg";
function Card() {
    return (
      <div className="ad">
          <h1 className="inspire">Inspiration for your next adventure</h1>
          <div className="cards">
                <Adventure img={one} />
                <Adventure img ={two} />
                <Adventure img={three}/>
                <Adventure img={four}/>
                <Adventure img={five}/>
                <Adventure img={six}/>
                <Adventure img={seven}/>
                <Adventure img={eight}/>
          </div>
      </div>
    );
}

export default Card;