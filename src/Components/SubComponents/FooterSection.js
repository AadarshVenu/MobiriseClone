import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { featureList, infoList } from './Cards/Utilities'




function FooterSection() {
    return (

        < >
            <div className="footerHero mt-5">
                <div className='overlayBG footerDiv'>
                    <div className='footerDiv'>
                        <Container>
                            <Row className="justify-content-md-around">
                                <Col md={6} lg={2}>
                                    <img src="https://mobirise.com/assets52/images/logo.webp" alt="logo" className="img-fluid" />
                                </Col>
                                <Col md={6} lg={2}>
                                    {
                                        infoList?.map((item) => {
                                            return (
                                                <Link to='/about' key={item.id} className='linkClass'>
                                                    <p>{item.text}</p>
                                                </Link>
                                            )
                                        }
                                        )
                                    }
                                    <div>
                                        <p className='text-white mt-2'>
                                            Flight Forum 40, 5657 DB <br /> Eindhoven, Netherlands  <br />
                                            Updated 2023-7-21
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6} lg={2}>
                                    {
                                        featureList?.map((item) => {
                                            return (
                                                <a href={item?.link} rel='noreferrer' className='linkClass'>
                                                    <p key={item.id}>{item.text}</p>
                                                </a>
                                            )
                                        }
                                        )
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <hr />
                                </Col>
                            </Row>
                            <Row >
                                <p className='text-center'>
                                    <span className='text-white'>
                                        Mobirise® is a registered trademark. © 2023 Mobirise Free <span className='linkClass'>Website Builder Software</span> - All Rights Reserved.<span className='linkClass'> Terms, Privacy</span>
                                    </span>
                                </p>
                            </Row>
                        </Container>
                    </div>

                </div>
            </div>
        </>

    )
}

export default FooterSection