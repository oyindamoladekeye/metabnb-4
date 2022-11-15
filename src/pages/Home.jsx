import About from "../component/About";
import Brands from "../component/Brands";
import Header from "../component/Header";
import "../styles/home.css";
import Card from "../component/Card";
function Home() {
    return ( 
      <div>
        <Header />
        <Brands />
        <Card />
        <About />
      </div>
     );
}

export default Home;