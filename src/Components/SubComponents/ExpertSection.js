import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { expertSectionData } from './Cards/Utilities.js'

function ExpertSection() {
    return (
        <section>
            <div className='cardWrapper'>
                <Container>
                    <div className="my-4 text-center">
                        <h1 className="textMainAbout fw-bold">Experts</h1>
                        <div className="paraClass">
                            Meet professionals who reviewed Mobirise and shared their opinion about it.
                        </div>
                    </div>
                    <Row>
                        {
                            expertSectionData?.map((item, index) => {
                                return (
                                    <Col sm={4} className='text-center my-4' key={index}>
                                        <div >
                                            <img src={item.src} alt='expert' className='cardImage' />
                                        </div>
                                        <div>
                                            <div className='titleClassAbout my-3'>
                                                {item.name}
                                            </div>
                                            <div className='paraClassSmall'>
                                                {item.title}
                                            </div>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col >
                                                </Col>
                                            </Row>
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

export default ExpertSection