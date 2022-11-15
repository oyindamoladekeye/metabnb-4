import arrow from "../assets/arrow.jpg";
import modalmask from "../assets/modalmask.jpg";
import modalwallet from "../assets/modalwallet.jpg"
import "../styles/modal.css"
function Modal({open , onClose}) {
    if (!open) return null
    return (  
        <div className="overlay">
            <div className="connect-wallet">
                <div className="close">
                    <h3>Connect Wallet</h3>
                    <p onClick ={onClose} className="x">X</p>
                </div>
                <div className="choose">
                    <p>Choose your preferred wallet:</p>
                    <div className="link">
                        <div className="modalmask">
                            <img src={modalmask} alt="" />
                            <a href="#">Metamask</a>
                        </div>
                        <div><img src={arrow} alt="" /></div>
                    </div>
                    <div className="link">
                        <div className="walletconnect">
                            <img src={modalwallet} alt="" />
                            <a href="#">WalletConnect</a>
                        </div>
                        <div><img src={arrow} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

