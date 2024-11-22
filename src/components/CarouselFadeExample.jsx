import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const CarouselFadeExample = () => {
  return (
    <>
      <Container>
        <div className="text-carouseel">
          <h1>الاكثر طلبا</h1>
        </div>
        <br />
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block custom-img"
              src="/images/massage.png"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block custom-img"
              src="/images/doctor work.png"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block custom-img"
              src="/images/Engineer working.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default CarouselFadeExample;
