import './App.css';
import image from './logo.png';
function Nvbr() {
  return (
    <div className='row'>
        <nav className="navbar navbar-expand-sm ">
        <div className="container">
            <a className="navbar-brand mr-auto" href="index.html">
                <img src={image}  alt =" " id="logo"/>
                TripSense
            </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"> <a href="index.html" className=" nav-link">About Us</a></li>
                    <li className="nav-item"> <a href="index.html" className=" nav-link">Blog </a></li>
                    <li className="nav-item"><a href="index.html" className=" nav-link">Contact Us </a></li>
                    <li className="nav-item"> <a href="index.html" className=" nav-link">FAQ </a></li>
                </ul>

            </div>
    </nav>
       </div>
    
  );
}

export default Nvbr;