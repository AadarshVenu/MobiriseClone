import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { featuredSectionData } from './Cards/Utilities.js'

function FeaturedSection() {
    return (
        <section>
            <Container>
                <div className="my-5 text-center">
                    <h1 className="textMainAbout fw-bold">Featured on</h1>
                </div>
                <Row>
                    {
                        featuredSectionData?.map((item, index) => {
                            return (
                                <Col sm={2}>
                                    <div key={index} className="d-flex justify-content-center align-items-center">
                                        <img src={item.src} alt="img" className='featuredImages'/>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default FeaturedSection