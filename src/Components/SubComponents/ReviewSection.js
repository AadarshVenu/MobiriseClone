import React from 'react'
import { reviewsData } from './Cards/Utilities.js'
import { Col, Container, Row } from 'react-bootstrap'

function ReviewSection() {
    return (
        <section>
            <Container>
                <div className="my-4 text-center">
                    <h1 className="textMainAbout fw-bold">Mobirise reviews</h1>
                </div>

                {
                    reviewsData.map((item, index) => {
                        return (
                            <div className='my-5'>

                                {item?.textFirst ?

                                    (
                                        <Row className='align-items-center'>
                                            <Col>
                                                <div className='reviewText'>{item?.title}</div>
                                                <div className='reviewTextDescription'>{item?.description}</div>
                                            </Col>
                                            <Col>
                                                <div className='p-5'>
                                                    <img
                                                        src={item?.src}
                                                        alt="hero"
                                                        width={"100%"}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    ) :

                                    (
                                        <Row className='align-items-center'>
                                            <Col>
                                                <div className='p-4'>
                                                    <img
                                                        src={item?.src}
                                                        alt="hero"
                                                        width={"100%"}
                                                    />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='reviewText'>{item?.title}</div>
                                                <div className='reviewTextDescription'>{item?.description}</div>
                                            </Col>
                                        </Row>
                                    )

                                }

                            </div>
                        )
                    }
                    )
                }

            </Container>
        </section>
    )
}

export default ReviewSection