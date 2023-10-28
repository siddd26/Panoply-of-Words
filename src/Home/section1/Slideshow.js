import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
// import translate from ".../";

function Slideshow() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Link to="/Dictionary">
          <img
            className="d-block w-100"
            src="/images/dictionary1.jpg"
            alt="First Slide"
          />
          <Carousel.Caption className="iot">
            <h3>Dictionary</h3>
            <p>Search word that confuses you.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/Notes">
          <img
            className="d-block w-100"
            src="/images/notes1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="iot">
            <h3>Notes</h3>
            <p>Write all your thoughts at one place.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/Translator">
          <img
            className="d-block w-100"
            src="images/translate1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="iot">
            <h3>Translator</h3>
            <p>Know it in your own languages.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
