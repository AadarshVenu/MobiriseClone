import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { storySectionData } from './Cards/Utilities'

function StorySection() {
    return (
        <section>
            <Container>
                <div className="mt-4 text-center">
                    <div className="textMainAbout fw-bold">
                        Our Story
                    </div>
                </div>
                <div className="mt-4">
                    {
                        storySectionData.map((item, index) => {
                            return (
                                <div className="my-5">
                                    <div className='text-center my-5 titleClassAbout'><p>{item.year}</p></div>
                                    <Row>
                                        <Col sm={6}>
                                            <div className='p-5 imageDivBorder'>
                                                <img src={item.src} alt="hero" width="100%" />
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className='sectionTitle'>
                                                {
                                                    item?.title
                                                }
                                            </div>
                                            <div className='descriptionClass'>
                                                {
                                                    item?.description
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })

                    }
                </div>
            </Container >
        </section >
    )
}

export default StorySection