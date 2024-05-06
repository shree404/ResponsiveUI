import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <>
      <div className="Footer">
        <Container>
          <Row>
            <Col md={3} xs={12}>
              <p className="Footer-container__first">Get APP</p>
            </Col>
            <Col md={3} xs={12}>
              {" "}
              <dl>
                <dt className="Footer-container__term">Product</dt>
                <dd className="Footer-container__description">Home</dd>
                <dd className="Footer-container__description">Learn</dd>
                <dd className="Footer-container__description">Blog</dd>
                <dd className="Footer-container__description">About us</dd>
              </dl>
            </Col>
            <Col md={3} xs={12}>
              <dl>
                <dt className="Footer-container__term">INFORMATION</dt>
                <dd className="Footer-container__description">Transparency</dd>
                <dd className="Footer-container__description">Help</dd>
              </dl>
            </Col>
            <Col md={3} xs={12}>
              {" "}
              <dl>
                <dt className="Footer-container__term">BE SOCIAL</dt>
                <dd className="Footer-container__description">Facebook</dd>
                <dd className="Footer-container__description">Twitter</dd>
                <dd className="Footer-container__description">Instagram</dd>
                <dd className="Footer-container__description">Linkedin</dd>
              </dl>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Footer-End">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <p>©2021 - Get APP | All right reserved</p>
            </Col>
            <Col md={6} sm={12}>
            <div className="Footer-End__link">
                <div> Terms and conditions</div>
                <div>Legal</div>
                <div>Pattents</div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
