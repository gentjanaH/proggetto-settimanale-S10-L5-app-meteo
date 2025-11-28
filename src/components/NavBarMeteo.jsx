import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import SearchBarMeteo from "./SearchBarMeteo";
import { Link, useLocation } from 'react-router-dom'



const NavBarMeteo = function (props) {
    const location = useLocation()

    return (
        <Navbar expand="md" className="sfondo-nav">
            <Container fluid className="m-0">
                <Row className="d-flex justify-content-between w-100 align-items-center">
                    <Col xs={12} md={6} className="d-flex justify-content-between align-items-center">
                        <Navbar.Brand href="#home">
                            <img src="public/sunny-rainy-cloudy-weather-icons_1308-126268-removebg-preview.png" width={"100px"} height={"100px"} />
                        </Navbar.Brand>
                        <Link to="/"
                            className={`nav-link fs-3 me-2 fw-bold titolo ${location.pathname === "/" ? "active" : ""
                                }`} >MyMeteo</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav " className="w-50 h-50">

                            <Nav >
                                <Link to="/"
                                    className={`nav-link  ${location.pathname === "/" ? "active" : ""
                                        }`} >Home</Link>
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
                        <SearchBarMeteo onSearch={props.onSearch} value={props.value} />
                    </Col>
                </Row>

            </Container>
        </Navbar >
    );
}

export default NavBarMeteo;