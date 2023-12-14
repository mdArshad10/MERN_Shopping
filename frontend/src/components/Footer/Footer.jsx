import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='py-3 text-center'>
                    <p>Shop &copy; {currentYear} </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
