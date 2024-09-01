import './foot.css';
const Foot = () => {
    return ( 
        <div className="row foot">
            <div className="col-sm-3">
                TripSense
            </div>
            <div className="col-sm-3">
                <ul className='ft'>
                    <li><a href="#">About</a></li>
                    <li>Blogs</li>
                    <li>ContactUs</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="col-sm-3">
                #social media handle
            </div>
        </div>
     );
}
 
export default Foot;