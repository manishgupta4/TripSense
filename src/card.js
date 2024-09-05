import image from './group.png';
import './card.css';
const Card = () => {
    return ( 
            <div className="row media px-5 pt-5 mx-2 my-2">
                <div className="media-body col-sm-8">
                    <h2 className='media-heading'>Top Hotels Suggestion for your next Trip</h2>
                    <p className="card-text">
                          Honest reviews and Virtual Tour to ensure 100% booking satisfaction
                          <br />
                          <a href="./App.js" className="btn btn-light my-3">Explore Now</a>
                    </p>
                </div>
                <div className="media-right col-sm-4">
                    <img src={image} alt="" className='media-object'/>
                </div>
            </div>
     );
}
 
export default Card;