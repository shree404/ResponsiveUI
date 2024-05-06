import img1 from '../../Assets/Page1/9.png';
import img2 from "../../Assets/Page1/10.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EndSection() {
  return (
    <>
      <Container fluid>
        <div className="EndSection">
          <Row>
            <Col md={{ span: 6, order:1 }} xs={{ span: 12, order: 2 }}>
              <div className="EndSection-header">
                <div className="EndSection-header__image1">
                  <img src={img2}  alt="" className="EndSection-header__image1" />
                </div>
                <div className="EndSection-header__text">4%</div>
              </div>
              <p>
                <span className="EndSection-header__text1">
                  Make dough, get app.
                </span>{" "}
                <br />{" "}
                <span className="EndSection-header__text2">
                  Join Get APP and start investing in minutes.
                </span>
              </p>
              <br />
              <div className="Navbar-Container__list">
                <button className="Navbar-Container__button">
                  GET STARTED
                </button>
              </div>
            </Col>
            <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
              <p>
                {" "}
                <span className="EndSection-header__text1">
                  Introducing Get APP Fixed
                </span>{" "}
                <br />{" "}
                <span className="EndSection-header__text2">
                  Earn predictable 4% fixed APY with the power of DeFi
                </span>
              </p>
              <div className="EndSection-header__image">
                <img src={img1} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default EndSection;
