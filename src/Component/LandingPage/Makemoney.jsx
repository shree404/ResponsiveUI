import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../Assets/Page1/Group.png";
import img2 from "../../Assets/Page1/1.png";
import img3 from "../../Assets/Page1/2.png";

function Makemoney() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4} sm={12} xs={12}>
            <div className="MakeMoney-header">
              <p className="MakeMoney-header__p1">
                We make <br />
                money move.
              </p>
              <button className="Navbar-Container__button">LEARN MORE</button>
            </div>
          </Col>
        </Row>
        <div className="MakeMoney-blog">
          <Row className="justify-content-md-center">
            <Col md={4} sm={12}>
              <article className="MakeMoney-blog__1">
                <img src={img1} className="MakeMoney-blog__image" alt="Connect Bank Account" />
                <p className="MakeMoney-blog__p">
                  Connect your bank account and start saving in under 5 minutes.
                </p>
              </article>
            </Col>
            <Col md={4} sm={12}>
              {" "}
              <article className="MakeMoney-blog__1">
                <img src={img2} className="MakeMoney-blog__image"  alt="Decentralized finance" />
                <p className="MakeMoney-blog__p">
                  4% APY through the power of decentralized finance.
                </p>
              </article>
            </Col>
            <Col md={4} sm={12}>
              {" "}
              <article className="MakeMoney-blog__1">
                <img src={img3} className="MakeMoney-blog__image"  alt="" />
                <p className="MakeMoney-blog__p">
                  Over $5+ million earning interest safely thanks to
                  best-in-class lending partners.
                </p>
              </article>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Makemoney;
