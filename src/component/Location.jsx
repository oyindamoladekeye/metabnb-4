import setting from "../assets/setting-5.jpg";
import "../styles/location.css"
function Location() {
    return (
        <div className="locations">
            <ul>
                <li>Resturant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantast city</li>
                <li>beach</li>
                <li>Carbins</li>
                <li>Off-grid</li>
                <li>Farm</li>
                <li className="setting">Location <img src={setting} alt="" /></li>
            </ul>
        </div>
    );
}

export default Location;