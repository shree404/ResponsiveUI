import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from '../Assets/3.png';
import img2 from '../Assets/4.png';
import img3 from '../Assets/5.png';
import img4 from '../Assets/6.png';


function Featured(){
    return(
        <>
        <Container fluid>
            <div className="Featured">
                <Row>
                    <div>
                        <Col md={12} sm={12}>
                        <div className="Featured-header"> <p>As featured in...</p></div></Col>
                    </div>
                </Row>
                <Row>
                    <div className="Featured-platform">
                        <Col md={3} sm={6}> <img src={img1} alt="" />
                        </Col>
                        <Col md={3} sm={6}> <img src={img2} alt="" /></Col>
                        <Col md={3} sm={6}> <img src={img3} alt="" /></Col>
                        <Col md={3} sm={6}> <img src={img4} alt="" /></Col>
                    </div>
                </Row>
            </div>
        </Container>
        </>
    )
}

export default Featured;