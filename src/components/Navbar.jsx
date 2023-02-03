import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavB = () => {
    return (
        <Navbar bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand><img
                alt=""
                src="https://www.pngall.com/wp-content/uploads/2/Digimon-Logo.png"
                width="120"
                className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#search">Búsqueda</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavB;