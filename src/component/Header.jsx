import "../styles/header.css";
import fourpics from "../assets/four-pics.jpg"
const Header = () => {
    return (
        <div className="header">
          <div className="content">
            <div className="detail">
              <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
              <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination 
              to reality at your comfort zone</p>
              <div className="search">
                <input type="text" placeholder="Search for location" />
                <button className="btn btn-b">Search</button>
              </div>
            </div>
            <img src={fourpics} alt="" className="fourpics" />
          </div>
        </div>
    );
}
 
export default Header;