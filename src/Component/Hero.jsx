import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../Assets/image 2.png";

function Hero() {
  return (
    <>
    <div className="Hero">
      <Container fluid>
        <div className="Hero-Container">
          <Row>
              <Col  sm={{ span: 6 }} md={6}>
                <div className="Hero-Container-first">
                  <p className="Hero-Container__p1">
                    Say goodbye <br />
                    to idle money.
                  </p>
                  <p className="Hero-Container__p2">
                    Earn 4% yield with DeFi-powered saving.
                  </p>
                  <div className="Hero-Container__end">
                    <div>
                      <button className="Navbar-Container__button">
                        {" "}
                        GET STARTED
                      </button>
                    </div>
                    <div>
                      <p className="Hero-Container__p3"> Available on IOS </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={{ order: 1 }}>
                <div>
                  <img src={image} className="Hero-Container__image" alt="Saving Money" />
                </div>
              </Col>
          </Row>
        </div>
      </Container>
      </div>
      <div className="HeroMobile">
        <Container fluid>
          <div className="HeroMobile-container">
          <Row>
            <Col>
          <img src={image} className="Hero-Container__image" alt="Saving Money" />
          </Col>
            </Row>
            <Row>
            <Col>
            <div className="Hero-Container-first">
                  <p className="Hero-Container__p1">
                    Say goodbye <br />
                    to idle money.
                  </p>
                  <p className="Hero-Container__p2">
                    Earn 4% yield with DeFi-powered saving.
                  </p>
                  <div className="Hero-Container__end">
                    <div>
                      <button className="Navbar-Container__button">
                        {" "}
                        GET STARTED
                      </button>
                    </div>
                    <div>
                      <p className="Hero-Container__p3"> Available on IOS </p>
                    </div>
                  </div>
                </div>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Hero;
