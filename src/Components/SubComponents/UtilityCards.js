import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { utilityCardsInfo } from './Cards/Utilities.js'


function UtilityCards() {
    return (
        <section>
            <Container>
                <Row>
                    {
                        utilityCardsInfo?.map((item, index) => {
                            return (
                                <Col key={index} sm={4} className='mb-4'>
                                    <div className='cardWrapper'>
                                        {
                                            item.videoPresent ? (

                                                <video
                                                    className="videoWrapperForDemo"
                                                    autoPlay="true"
                                                    loop="true"
                                                    muted="true"
                                                    playsInline="true"
                                                    data-loaded="true"
                                                >
                                                    <source
                                                        data-src={item.src}
                                                        type="video/webm"
                                                        src={item.src}
                                                    ></source>
                                                    <source
                                                        data-src={item.src}
                                                        type="video/mp4"
                                                        src={item.src}
                                                    ></source>
                                                </video>
                                            ) : (
                                                <img
                                                    className="videoWrapperForDemo"
                                                    src={item.src}
                                                    alt="img"
                                                />
                                            )
                                        }
                                        <div className='p-4'>
                                            <div className='titleClass mb-1'><p>{item.title}</p></div>
                                            <div className='paraClassSmall mb-1'><p>{item.description}</p></div>
                                        </div>
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

export default UtilityCards