import './foot.css';

function Carsl() {
  return (
    <div className="row carsl">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="..." alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Hi</h5>
                    <p>First</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Hello</h5>
                    <p>Second</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Third slide"/>
                Third slide
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    </div>
  );
}

export default Carsl;