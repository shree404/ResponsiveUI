import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../Assets/page2/5.png";

function Hero2() {
  return (
    <>
      <div>
        <Container>
          <div className="Hero2">
            <Row>
              <Col md={{ span: 5, order: 1 }} sm={12} xs={12}>
                <div className="Hero2-first">
                  <p>
                    <span className="Hero2-first__p1">Johnny the Tireless</span>{" "}
                    <br />
                    <span className="Hero2-first__p2">
                      UX-UI designer <br />
                      UI developer
                    </span>
                  </p>
                  <button className="Hero2-first__button">GET STARTED</button>
                </div>
              </Col>
              <Col md={{ span: 6, order: 2 }} sm={12} xs={12}>
                <div>
                  <img src={img} className="Hero2-first__image" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="Hero2-last"></div>
    </>
  );
}

export default Hero2;
