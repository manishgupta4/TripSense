import './App.css';
function Nvbr() {
  return (
    <div className='row'>
        <nav className="navbar navbar-expand-sm ">
        <div className="container">
            <a className="navbar-brand mr-auto" href="index.html">
                <img src="logo.png"  alt =" " id="logo"/>
                TripSense
            </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"> <a href="#" className=" nav-link">About Us</a></li>
                    <li className="nav-item"> <a href="#" className=" nav-link">Blog </a></li>
                    <li className="nav-item"><a href="#" className=" nav-link">Contact Us </a></li>
                    <li className="nav-item"> <a href="#" className=" nav-link">FAQ </a></li>
                </ul>

            </div>
    </nav>
       </div>
    
  );
}

export default Nvbr;