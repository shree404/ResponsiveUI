import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/Page1/7.png";
import img2 from "../../Assets/Page1/8.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

function ReviewSlider() {
  const Slider = [
    {
      image: img1,
      name: "Darrell Steward",
      post: "Art-director",
      description:
        "“I earned my first $50 in no time and it didn’t even feel like investing because I was using the roundup feature.”",
    },
    {
      image: img2,
      name: "Kathryn Murphy",
      post: "School teacher",
      description:
        "“Where to start? I have been using the Get app since it was in Beta mode and have had zero problems.”",
    },
  ];

  return (
    <>
      <div className="ReviewSlider-Medium">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="ReviewSlider">
              {Slider.map((review, index) => (
                <div key={index} className="ReviewSlider-individual">
                  <article className="ReviewSlider-individual__container">
                    <Container>
                      <Row className="mt-5 mb-5">
                        <Col>
                          <img src={review.image} alt="Image of Reviewer" />
                        </Col>
                        <Col>
                          <p>
                            <span className="ReviewSlider-individual__name">
                              {review.name}
                            </span>{" "}
                            <br />
                            <span className="ReviewSlider-individual__post">
                              {review.post}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <p className="ReviewSlider-individual__description">
                          {review.description}
                        </p>
                      </Row>
                    </Container>
                  </article>
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="ReviewSlider">
              {Slider.map((review, index) => (
                <div key={index} className="ReviewSlider-individual">
                  <article className="ReviewSlider-individual__container">
                    <Container>
                      <Row className="mt-5 mb-5">
                        <Col>
                          <img src={review.image} alt="Image of Reviewer" />
                        </Col>
                        <Col>
                          <p>
                            <span className="ReviewSlider-individual__name">
                              {review.name}
                            </span>{" "}
                            <br />
                            <span className="ReviewSlider-individual__post">
                              {review.post}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <p className="ReviewSlider-individual__description">
                          {review.description}
                        </p>
                      </Row>
                    </Container>
                  </article>
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="ReviewSlider">
              {Slider.map((review, index) => (
                <div key={index} className="ReviewSlider-individual">
                  <article className="ReviewSlider-individual__container">
                    <Container>
                      <Row className="mt-5 mb-5">
                        <Col>
                          <img src={review.image} alt="Image of Reviewer" />
                        </Col>
                        <Col>
                          <p>
                            <span className="ReviewSlider-individual__name">
                              {review.name}
                            </span>{" "}
                            <br />
                            <span className="ReviewSlider-individual__post">
                              {review.post}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <p className="ReviewSlider-individual__description">
                          {review.description}
                        </p>
                      </Row>
                    </Container>
                  </article>
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="ReviewSlider-Small">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="ReviewSlider">
              {Slider.slice(0, 1).map((review, index) => (
                <div key={index} className="ReviewSlider-individual">
                  <article className="ReviewSlider-individual__container">
                    <Container>
                      <Row className="mt-5 mb-5">
                        <Col>
                          <img src={review.image} alt="Image of Reviewer" />
                        </Col>
                        <Col>
                          <p>
                            <span className="ReviewSlider-individual__name">
                              {review.name}
                            </span>{" "}
                            <br />
                            <span className="ReviewSlider-individual__post">
                              {review.post}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <p className="ReviewSlider-individual__description">
                          {review.description}
                        </p>
                      </Row>
                    </Container>
                  </article>
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="ReviewSlider">
              {Slider.slice(1,2).map((review, index) => (
                <div key={index} className="ReviewSlider-individual">
                  <article className="ReviewSlider-individual__container">
                    <Container>
                      <Row className="mt-5 mb-5">
                        <Col>
                          <img src={review.image} alt="Image of Reviewer" />
                        </Col>
                        <Col>
                          <p>
                            <span className="ReviewSlider-individual__name">
                              {review.name}
                            </span>{" "}
                            <br />
                            <span className="ReviewSlider-individual__post">
                              {review.post}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <p className="ReviewSlider-individual__description">
                          {review.description}
                        </p>
                      </Row>
                    </Container>
                  </article>
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="ReviewSlider">
              {Slider.slice(0,1).map((review, index) => (
                <div key={index} className="ReviewSlider-individual">
                  <article className="ReviewSlider-individual__container">
                    <Container>
                      <Row className="mt-5 mb-5">
                        <Col>
                          <img src={review.image} alt="Image of Reviewer" />
                        </Col>
                        <Col>
                          <p>
                            <span className="ReviewSlider-individual__name">
                              {review.name}
                            </span>{" "}
                            <br />
                            <span className="ReviewSlider-individual__post">
                              {review.post}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <p className="ReviewSlider-individual__description">
                          {review.description}
                        </p>
                      </Row>
                    </Container>
                  </article>
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default ReviewSlider;
