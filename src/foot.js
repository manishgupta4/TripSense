import './foot.css';
import image from './logo.png';
const Foot = () => {
    return ( 
        <div className='row mt-5 mb-1 px-5 py-3 foot'>
            <div className="col-sm-4 px-4">
                <a className="navbar-brand mr-auto" href="index.html">
                    <img src={image} id="logo"/>
                    Tripsense
                </a>
            </div>
            <div className="col-sm-4 px-4">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"> <a href="index.html" className="nav-link">About Us</a></li>
                    <li className="nav-item"> <a href="index.html" className="nav-link">Blogs </a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link">Contact Us </a></li>
                    <li className="nav-item"> <a href="index.html" className="nav-link">FAQ </a></li>
                </ul>
            </div>
            <div className="col-sm-4 px-4">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a href="http://google.com" ><i className="nav-link fa fa-google"></i>Google </a></li>
                <li className="nav-item"><a href="http://www.facebook.com/profile.php?id=" ><i className="nav-link fa fa-facebook"></i>Facebook</a></li>
                <li className="nav-item"><a href="http://www.linkedin.com/in/" ><i className="nav-link fa fa-linkedin"></i>Linkedin</a></li>
                <li className="nav-item"><a href="http://twitter.com/" ><i className="nav-link fa fa-twitter"></i>Twitter</a></li>
             </ul>
            </div>
        </div>
     );
}
 
export default Foot;