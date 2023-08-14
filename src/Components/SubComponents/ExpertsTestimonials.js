import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { expertsTestimonialsCards } from './Cards/Utilities.js'
import { Container } from "react-bootstrap";

function ExpertsTestimonials() {
    return (
        <section>
            <div className="cardWrapper text-center py-5">
                <Container>
                    <div className="mt-4 text-center">
                        <h1 className='sectionTitle'>What experts say</h1>
                    </div>
                    <Row className="mt-5">
                        {
                            expertsTestimonialsCards?.map((item, index) => {
                                return (
                                    <Col key={index} sm={3} className='mt-5 text-center'>
                                        <div>
                                            <img src={item.img} alt="img" className="expertImages"/>
                                        </div>
                                        <div>
                                            <p className='paraClassXSmall'>{item.description}</p>
                                        </div>
                                        <div>
                                            <p className='paraClassXSmall fw-bold mt-3'>{item.name}</p>
                                        </div>
                                        <div>
                                            <p className='paraClassXSmall mt-3'>{item.designation}</p>
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

export default ExpertsTestimonials