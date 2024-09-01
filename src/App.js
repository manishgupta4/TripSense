import Nvbr from './navbar.js';
import './App.css';
import image from './group.jpg';
import Foot from './foot.js';
import Carsl from './carousel.js';
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-12">
          <Nvbr />
        </div>
      </div>
        <div className="row">
            <div className="card">
              <div className="row">
                <div className="col-sm-6">
                  <div class="card-body">
                    <h5 class="card-title">
                      Top Hotels Suggestion for your next Trip
                    </h5>
                    <p class="card-text">
                      Honest reviews and Virtual Tour to ensure 100% booking satisfaction
                    </p>
                    <a href="#" class="btn btn-primary">Explore Now</a>
                  </div>
                </div>
                <div className="col-sm-6">
                 <img src={image} alt="..."></img>
                </div>
              </div>

            </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
              <h3>Why choose us?</h3>
              <h6>Best Hotel Prices across multiple booking sites</h6>
              <p>
              Real-time deals from popular sites like MakeMyTrip, Goibibo, Booking,com & Airbnb to let you choose the cheapest price for booking
              </p>
              <hr/>
              <h6>Honest User Experience based on all reviews</h6>
              <p>
              Transparency on Pros and Cons of booking the Hotel, based on Data-driven analysis of every user review of the Hotel
              </p>
              <hr/>
              <h6>Virtual Tour & Proximity from Popular Places </h6>
              <p>
              3D simulation of hotel rooms and locality of the hotels, and map-based distance from popular tourist places, airport, railway stations and much more
              </p>
          </div>
          <div className="col-sm-6">
            video 
          </div>
        </div>
        <div className="row">
          <Carsl/>
        </div>
        <div className="row">
          <Foot/>
        </div>
        
    </div>
  );
}

export default App;
