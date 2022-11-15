import mmask from "../assets/mmask.jpg";
import mtoken from "../assets/mtoken.jpg";
import opensea from "../assets/opensea.jpg";
import "../styles/brands.css"
const Brands = () => {
    return (  
        <div className="brands">
            <img src={mtoken} alt="" className="brand" />
            <img src={mmask} alt=""  className="brand"/>
            <img src={opensea} alt="" className="brand" />
        </div>
    );
}
 
export default Brands;