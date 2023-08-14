import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { numbersInfo } from './Cards/Utilities'




function TeamSection() {
    return (
        <section >
            <div className='my-5'>
                <div className='p-5'>
                    <Row className='align-items-center'>
                        <Col sm={4}>
                            <div className="textMainAbout fw-bold">
                                Our team
                            </div>
                            <div className="descriptionClass">
                                Behind Mobirise is a powerful team of talented and experienced specialists who work hard trying to provide you the most convenient and modern web design tool to create catchy Google-friendly websites.
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div>
                                <img src={"https://mobirise.com/about/assets/images/aboutus-1.png"} alt="team" width="100%" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Container>
                    <Row>
                        {numbersInfo?.map((item) => {
                            return (
                                <Col>
                                    <Row className='align-items-center'>
                                        <Col sm={3} className='text-center'>
                                            <span className="material-icons-round" style={{ color: "#6592e6", fontSize: "90px" }}>
                                                {item.icon}
                                            </span>
                                        </Col>
                                        <Col sm={9} className='text-center'>
                                            <Row>
                                                <div className="textMainNumber">
                                                    {item.numberText}
                                                </div>
                                                <div className="descriptionClass">
                                                    {item.text}
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })}
                    </Row>

                </Container>
            </div>
        </section>
    )
}

export default TeamSection