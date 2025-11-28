import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import SearchBarMeteo from "./SearchBarMeteo";




const NavBarMeteo = function () {
    return (
        <Navbar expand="md" className="bg-body-tertiary ">
            <Container fluid className="m-0">
                <Row className="d-flex justify-content-between w-100 align-items-center">
                    <Col xs={12} md={6} className="d-flex justify-content-between align-items-center">
                        <Navbar.Brand href="#home">
                            <img src="public/sunny-rainy-cloudy-weather-icons_1308-126268-removebg-preview.png" width={"100px"} height={"100px"} />
                        </Navbar.Brand>
                        <Nav.Link href="#home" className="fs-3 me-2 fw-bold titolo" >MyMeteo</Nav.Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav w-50 h-50">

                            <Nav >
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <SearchBarMeteo />
                    </Col>
                </Row>

            </Container>
        </Navbar >
    );
}

export default NavBarMeteo;