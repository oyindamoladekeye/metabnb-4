import "../styles/about.css";
import threepics from"../assets/threepics.jpg"
const About = () => {
    return (  
        <div className="about">
            <div className="learn">
                <div className="meta">
                    <p className="metabnb">Metabnb NFTs</p>
                    <p className="description">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs.
                    These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button className="learn-more">Learn More</button>
                </div>
                <div>
                    <img src={threepics} alt="" className="threepics" />
                </div>
            </div>
        </div>
    );
}
 
export default About;