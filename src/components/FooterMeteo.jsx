import { Container, Row, Col } from "react-bootstrap";

function FooterMeteo() {
    return (
        <footer className="sfondo-nav ">
            <Container>
                <Row className="justify-content-center">
                    {/* icone social */}
                    <Col
                        xs={12}
                        md={10}
                        className="text-center  text-md-start text-light my-4"
                    >
                        <span className="me-2"><i className="bi bi-facebook"></i></span>
                        <span className="me-2"><i className="bi bi-instagram"></i></span>
                        <span className="me-2"><i className="bi bi-twitter"></i></span>
                        <span className="me-2"><i className="bi bi-youtube"></i></span>
                    </Col>


                    <Col xs={12} md={6} className="text-center text-md-start text-light">

                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-light" href="#">Media Center</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-light" href="#">Privacy</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-light" href="#">Contact Us</a>
                        </p>

                        <p className="text-light">&copy; 1997-2025 MyMeteo, Inc.</p>
                    </Col>



                    <Col xs={12} md={6} className="text-center text-md-start text-light">
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-light" href="#">Help Center</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-light" href="#">Jobs</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-light" href="#">Cookies Preferences</a>
                        </p>
                    </Col>


                </Row>
            </Container>
        </footer>
    );
}

export default FooterMeteo;