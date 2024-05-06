import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../Assets/iphone.png";

function HowItWorks() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12} md={6}>
            <p className="HowItWorks-header__p1">How it works? </p>
          </Col>
        </Row>
        <div className="HowItWorks-blog">
          <Row className="justify-content-md-center">
            <Col sm={4} xs={{ span: 12, order: 2 }} md={{ span: 4, order: 1 }}>
              <div className="HowItWorks-blog-1">
                <div className="HowItWorks-blog-individual">
                  <p>
                    <span className="HowItWorks-blog__p1">01</span> <br />
                    <br /> <span className="HowItWorks-blog__p2">
                      Deposit
                    </span>{" "}
                    <br />
                    <br />
                    <span className="HowItWorks-blog__p3">
                      Link your bank account to add funds instantly.
                    </span>
                  </p>
                </div>
                <div className="HowItWorks-blog-individual">
                  {" "}
                  <p>
                    <span className="HowItWorks-blog__p1">02</span> <br />
                    <br /> <span className="HowItWorks-blog__p2">
                      Automate
                    </span>{" "}
                    <br />
                    <br />
                    <span className="HowItWorks-blog__p3">
                      Collect spare change or schedule recurring deposits.
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }}  sm={4} md={{ span: 4, order: 2 }}>
              <div className="HowItWorks-blog__image">
              <img src={img} alt="Image of Iphone"  />
              </div>
            </Col>
            <Col sm={4} xs={{ span: 12, order: 3 }} md={{ span: 4, order: 3 }}>
              <div className="HowItWorks-blog-1">
                <div className="HowItWorks-blog-individual">
                  <p>
                    <span className="HowItWorks-blog__p1">03</span> <br />
                    <br />{" "}
                    <span className="HowItWorks-blog__p2">Earn Yield</span>{" "}
                    <br />
                    <br />
                    <span className="HowItWorks-blog__p3">
                      Generate fixed or variable interest in real time at rates
                      up to 20x your bank.
                    </span>
                  </p>
                </div>
                <div className="HowItWorks-blog-individual">
                  {" "}
                  <p>
                    <span className="HowItWorks-blog__p1">04</span> <br />
                    <br /> <span className="HowItWorks-blog__p2">
                      Cash Out
                    </span>{" "}
                    <br />
                    <br />
                    <span className="HowItWorks-blog__p3">
                      Move your savings in and out freely with no fees or fixed
                      terms.
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <div className="HowItWorks-end">
            <button className="Navbar-Container__button">GET STARTED</button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default HowItWorks;
