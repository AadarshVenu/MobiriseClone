import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { mainPageInfo, aboutInfoData } from './Utilities.js'
import { Col } from "react-bootstrap";

function InfoCards(props) {

    const { aboutpage } = props;



    return (
        <section>
            <Container>
                {
                    aboutpage ? (
                        <Row className='px-5 mt-5'>
                            {
                                aboutInfoData?.map((item, index) => {
                                    return (
                                        <Col sm={4}>
                                            <Row className="justify-content-between align-items-center">
                                                <Col sm={4}>
                                                    <span className="material-icons-round" style={{ color: "#f66", fontSize: "90px" }}>
                                                        {item.icon}
                                                    </span>
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="textMainAbout">
                                                        {item.numberText}
                                                    </div>
                                                    <div className="titleClassAbout my-2">
                                                        {item.title}
                                                    </div>
                                                    <p className="descriptionClass">{item.text}</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    ) : (
                        <Row className='px-5 mt-5'>

                            {
                                mainPageInfo?.map((item, index) => {
                                    return (
                                        <div className='col-12 col-md-6 col-lg-4 mb-3' key={index}>
                                            <div className='cardWrapper py-3 px-5'>
                                                <div className='d-flex justify-content-center'>
                                                    <span className="material-icons-round" style={{ color: "#f66", fontSize: "105px" }}>
                                                        {item.icon}
                                                    </span>
                                                </div>
                                                <div className='text-center'>
                                                    <div><h5 className='titleClass'>{item.title}</h5></div>
                                                    <div><h6 className='descriptionClass mt-3'>{item.description}</h6></div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </Row>
                    )
                }

            </Container >
        </section >
    )
}

export default InfoCards