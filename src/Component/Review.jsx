import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Review() {
  return (
    <>
      <Container fluid>
          <Row>
            <div>
              <Col md={12} sm={12}>
                <div className="Review-header">
                  {" "}
                  <p>
                    {" "}
                    <span className="Review-header__p1">
                      “It’s easy, it’s fun, and it’s got charm to burn.”
                    </span>{" "}
                    <br />
                    <br />
                    <span className="Review-header__p2"> MossCow</span>
                    <br />
                    <br />
                    <span className="Review-header__p3">App Store review</span>
                  </p>{" "}
                </div>
              </Col>
            </div>
          </Row>
          <Row>
            
          </Row>
      </Container>
    </>
  );
}

export default Review;
