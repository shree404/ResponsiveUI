import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import icon from "../../Assets/page2/icon.svg";

function MoreWork() {
  return (
    <>
      <div className="MoreWork">
        <Container>
          <div className="MoreWork-Row1">
            <Row>
              <Col>
                <p>
                  <span className="MoreWork-Row1__p1">More Works</span> <br />
                  <span className="MoreWork-Row1__p2">
                    More of my design and development work on platforms like
                    dribbble, behance and codepen.
                  </span>
                </p>
              </Col>
            </Row>
          </div>
          <Row className="justify-content-md-center mt-5">
            <Col md={4} sm={6} xs={6}>
              <p className="MoreWork-head">Fitness coaching</p>
              <ul>
                <li className="MoreWork-list">Landing page</li>
                <li className="MoreWork-list">Dribbble</li>
              </ul>
            </Col>
            <Col md={2} sm={6} xs={6}>
              <p className="MoreWork__link">
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>{" "}
              </p>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col md={4} sm={6} xs={6}>
              <p className="MoreWork-head">Responsive Accordion</p>
              <ul>
                <li className="MoreWork-list">Accordion</li>
                <li className="MoreWork-list">Github</li>
              </ul>
            </Col>
            <Col md={2} sm={6} xs={6}>
              <p className="MoreWork__link">
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>{" "}
              </p>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col md={4} sm={6} xs={6}>
              <p className="MoreWork-head">Event booking app</p>
              <ul>
                <li className="MoreWork-list">App</li>
                <li className="MoreWork-list">Dribble</li>
              </ul>
            </Col>
            <Col md={2} sm={6} xs={6}>
              <p className="MoreWork__link">
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>{" "}
              </p>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col md={4} sm={6} xs={6}>
              <p className="MoreWork-head">Tours & Travels</p>
              <ul>
                <li className="MoreWork-list">Website</li>
                <li className="MoreWork-list">Dribble</li>
              </ul>
            </Col>
            <Col md={2} sm={6} xs={6}>
              <p className="MoreWork__link">
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>{" "}
              </p>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col md={4} sm={6} xs={6}>
              <p className="MoreWork-head">Wearemoms</p>
              <ul>
                <li className="MoreWork-list">Blog</li>
                <li className="MoreWork-list">99designs</li>
              </ul>
            </Col>
            <Col md={2} sm={6} xs={6}>
              <p className="MoreWork__link">
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>{" "}
              </p>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col md={4} sm={6} xs={6}>
              <p className="MoreWork-head">Halfmoon hero </p>
              <ul>
                <li className="MoreWork-list">Hero section</li>
                <li className="MoreWork-list">Dribbble</li>
              </ul>

            </Col>
            <Col md={2} sm={6} xs={6}>
              <p className="MoreWork__link">
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>{" "}
              </p>{" "}
            </Col>
          </Row>
        </Container>
        <div className="MoreWork-End">
            <Container>
                <Row>
                    <Col>
                    <p>
                        <span></span>
                        <button></button>
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
      </div>
    </>
  );
}

export default MoreWork;
