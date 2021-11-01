import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center' py-3='true' style={{ fontSize: 15 }}>
                        Copyright &copy; Music Shop | Built by John Abichuela
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
