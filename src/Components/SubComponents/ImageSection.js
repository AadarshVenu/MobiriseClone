import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { imageLinks } from './Cards/Utilities.js'
import { Container } from "react-bootstrap";

function ImageSection() {
    return (
        <section>
            <div className="cardWrapper text-center py-5">
                <Container>
                    <div className="mt-4 text-center">
                        <h1 className='sectionTitle'>Made with Mobirise
                            <br />
                            No Code</h1>
                    </div>
                    <Row className="mt-5">
                        {
                            imageLinks?.map((item, index) => {
                                return (
                                    <Col key={index} sm={3} className='mt-5 text-center'>
                                        <div>
                                            <a href={item?.href} target="_blank" rel="noreferrer">
                                                <img src={item.src} alt="img" className="imageSection" />
                                            </a>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>


        </section>

    )
}

export default ImageSection