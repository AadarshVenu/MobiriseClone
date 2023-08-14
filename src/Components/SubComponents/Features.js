import React from "react";
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { featuresInfo } from './Cards/Utilities.js'

function Features() {
    return (
        <>
            <section>
                {featuresInfo?.map((card, index) => {
                    return (
                        <div key={index} className='rowClass'>
                            {card.textFirst ? (
                                <Row className="my-5 me-0">
                                    <Col
                                        sm={5}
                                        className="ps-5"
                                    >
                                        <h1 className="sectionTitle mb-2">{card.title}</h1>
                                        <p className={"paraClass"}>{card.description}</p>
                                        <p className="buttonClass">{card.button}</p>
                                    </Col>
                                    <Col sm={1}>
                                    </Col>
                                    <Col sm={6} className="px-0">
                                        <img
                                            className="videoWrapperForDemo"
                                            src={card.img}
                                            alt="img"
                                        />
                                    </Col>
                                </Row>
                            ) : (
                                <Row className="my-5 me-0">
                                    <Col sm={6} className="px-0">
                                        <img
                                            className="videoWrapperForDemo"
                                            src={card.img}
                                            alt="img"
                                        />
                                    </Col>
                                    <Col sm={1}>
                                    </Col>
                                    <Col
                                        sm={5}
                                        className="pe-5"
                                    >
                                        <h1 className="sectionTitle mb-2">{card.title}</h1>
                                        <p className={"paraClass"}>{card.description}</p>
                                        <p className="buttonClass">{card.button}</p>
                                    </Col>
                                </Row>

                            )
                            }
                        </div>
                    );
                })}
            </section>
        </>
    )
}

export default Features