import logo from "../assets/logofooter.jpg";
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.jpg";
import twitter from "../assets/twitter.jpg";
import copyright from "../assets/copyright.jpg"
import "../styles/footer.css"
const Footer = () => {
    return (
            <footer>
                <div className="all">
                    <div className="flogo">
                      <div className="logo"><img src={logo} /></div>
                          <div className="social">
                              <img src={facebook}/>
                              <img src={instagram} />
                              <img src={twitter} />
                          </div>
                    </div>
                    <p><img src={copyright} />2022 Metabnb</p>
                </div>
                <div className="location">
                    <h2>Community</h2>
                    <div className="loc">
                        <h5>NFT</h5>
                        <h5>Tokens</h5>
                        <h5>Landlords</h5>
                        <h5>Discord</h5>
                    </div>
                </div>
                <div className="location">
                    <h2>Places</h2>
                    <div className="loc">
                        <h5>Castle</h5>
                        <h5>Farms</h5>
                        <h5>Beach</h5>
                        <h5>Learn more</h5>
                    </div>
                </div>
                <div className="location">
                    <h2>About Us</h2>
                    <div className="loc">
                        <h5>Road maps</h5>
                        <h5>Creators</h5>
                        <h5>Career</h5>
                        <h5>Contact us</h5>
                    </div>
                </div>
            </footer>
    );
}
 
export default Footer;