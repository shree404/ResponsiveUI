import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../Assets/page2/1.png";
import img2 from "../../Assets/page2/2.png";
import img3 from "../../Assets/page2/3.png";
import img4 from "../../Assets/page2/4.png";
import icon from "../../Assets/page2/icon.svg";

function Projects2() {
  return (
    <>
      <div className="Projects">
        <Container>
          <div className="Projects-first">
            <Row className="justify-content-md-center">
              <Col md={12} sm={12} xs={12}>
                <p>
                  Selected <br />
                  Projects
                </p>
              </Col>
            </Row>
          </div>
          <div className="Projects-individual">
            <Row className="justify-content-md-center mt-5 ">
              <Col md={6} sm={12} xs={12}>
                <img src={img4} alt="Logo of Orion Captial" />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <p className="Projects-des">
                  <span className="Projects-des__p1">Orion Capital</span> <br />{" "}
                  <span className="Projects-des__p2">Website & branding</span>{" "}
                  <br /> <br />
                  <span className="Projects-des__p3">
                    Learn more <img src={icon} alt="Right Arrow" />
                  </span>
                </p>
              </Col>
            </Row>
          </div>
          <div className="Projects-individual">
          <Row className="justify-content-md-center mt-5">
            <Col md={6} sm={12} xs={12}>
              <img src={img3} alt="Image of Ground Pool" />
            </Col>
            <Col md={4} sm={12} xs={12}>
              <p className="Projects-des">
                <span className="Projects-des__p1">Groundpool</span> <br />{" "}
                <span className="Projects-des__p2">Website </span> <br /> <br />
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>
              </p>
            </Col>
          </Row>
          </div>
          <div className="Projects-individual">
          <Row className="justify-content-md-center mt-5">
            <Col md={6} sm={12} xs={12}>
              <img src={img2} alt="Image of Atmosphere " />
            </Col>
            <Col md={4} sm={12} xs={12}>
              <p className="Projects-des">
                <span className="Projects-des__p1">Atmosphere </span> <br />{" "}
                <span className="Projects-des__p2">Android app</span> <br />{" "}
                <br />
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>
              </p>
            </Col>
          </Row>
          </div>
          <div className="Projects-individual">
          <Row className="justify-content-md-center mt-5">
            <Col md={6} sm={12} xs={12}>
              <img src={img1} alt="Image of Atmosphere " />
            </Col>
            <Col md={4} sm={12} xs={12}>
              <p className="Projects-des">
                <span className="Projects-des__p1">ComeAndEat </span> <br />{" "}
                <span className="Projects-des__p2">Restaurant POS app </span>{" "}
                <br /> <br />
                <span className="Projects-des__p3">
                  Learn more <img src={icon} alt="Right Arrow" />
                </span>
              </p>
            </Col>
          </Row>
          </div>
        </Container>
        <div className="Projects-last">
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col>
                <p >
                <p className="Projects-last__p">“I have a passion for creating user <br />experiences that are seamless, meaningful <br /> and impactful.”</p>
                <button className="Hero2-first__button">ABOUT ME</button> <br /> <br />
                </p>
                </Col>
            </Row>
        </Container>
        </div>
      </div>
    </>
  );
}

export default Projects2;
