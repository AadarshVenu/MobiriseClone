import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(props) {

    const { aboutpage } = props



    return (
        <>
            <div className='p-2 mx-2 my-1 headerClass'>
                <div style={{ pointerEvents: "all" }}>
                    <Row className='align-items-center justify-content-between'>
                        <Col sm={1} className='text-end px-0'>
                            <img src={"https://mobirise.com/assets52/images/logo.webp"} alt='logo' style={{ height: "3.8rem" }} />
                        </Col>
                        <Col sm={1} className='text-start ps-0'>
                            <p className='navText'> Mobirise</p>
                        </Col>
                        <Col sm={6}>

                        </Col>
                        <Col sm={1} className='text-end px-0'>
                            {
                                !aboutpage &&
                                <span className="material-icons-round" style={{ color: "#6592e6", fontSize: "35px" }}>
                                    language
                                </span>
                            }
                        </Col>
                        <Col sm={3} className='pe-0'>
                            <div className='premiumButton'>
                                {
                                    aboutpage ?
                                        <Link to='/'>
                                            <p>BACK TO HOME</p>
                                        </Link>
                                        :
                                        <Link to='/about'>
                                            <p>GO PREMIUM - SAVE HUGE!</p>
                                        </Link>
                                }

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='headerSectionSmall'>
                <Row className='align-items-center justify-content-center'>
                    <Col sm={1} className='text-end px-0'>
                        <img src={"https://mobirise.com/assets52/images/logo.webp"} alt='logo' style={{ height: "3.8rem" }} />
                    </Col>
                    <Col sm={1} className='text-start ps-0'>
                        <p className='navText'> Mobirise</p>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Header