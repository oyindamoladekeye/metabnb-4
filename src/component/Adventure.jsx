import "../styles/adventure.css";
import ratings from "../assets/rating.jpg"
function Adventure(props) {
    return (  
       <div className="card">
           <div className="adventure">
             <div>
                <img src={props.img} alt="" className="img"/>
             </div>
             <div className="card-bottom">
                 <div className="card-bottom-left">
                    <p className="desert">Desert king</p>
                    <h6 className="km">2345km away</h6>
                    <img src={ratings} alt="" />
                 </div>
                 <div className="card-bottom-right">
                    <h3 className="mbt">1MBT per night</h3>
                    <p className="available">available for 2weeks stay</p>
                 </div>
             </div>
            </div>
       </div>
    );
}

export default Adventure;