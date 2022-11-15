import logo from "../assets/logo.jpg";
import {Link} from "react-router-dom"
import Modal from "./Modal";
import {useState} from "react"
function Navbar() {
  const [openModal ,setOpenModal] = useState(false)
    return (  
        <nav>
            <div className="navbar">
              <div className="navlogo">
                  <img src={logo} alt="" />
              </div>
              {/* <div className="menu-icon">
                <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
              </div> */}
              <div className="nav-item">
                <ul>
                    <li>
                      <Link to= "/">Home</Link>
                    </li>
                    <li>
                      <Link to= "/placetostay" className="place">Place to stay</Link>
                    </li>
                    <li>
                      <Link to= "/">NFTs</Link>
                    </li>
                    <li>
                      <Link to= "/">Community</Link>
                    </li>
                </ul>
                <div>
                  <button onClick ={() => setOpenModal(true)}className="btn btn-a">Connect Wallet</button>
                  <Modal open ={openModal} onClose ={()=>setOpenModal (false)} />
                </div>
              </div>
            </div>
        </nav>
    );
}

export default Navbar;