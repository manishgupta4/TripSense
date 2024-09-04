import Nvbr from './navbar.js';
import './App.css';
import Foot from './foot.js';
import Carsl from './carousel.js';
import Card from './card.js';
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-12">
          <Nvbr />
        </div>
      </div>
        <div className="row">
          <Card/>
        </div>
        <div className="row px-5">
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
