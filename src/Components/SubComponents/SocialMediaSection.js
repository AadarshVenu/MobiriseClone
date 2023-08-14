import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { socialMediaButtons } from './Cards/Utilities.js'

function SocialMediaSection(props) {

    const { aboutpage } = props

    let requiredSocialMediaButtons = [];

    if (aboutpage) {
        requiredSocialMediaButtons = socialMediaButtons
    } else {
        requiredSocialMediaButtons = socialMediaButtons?.filter((item, index) => !item?.forAboutPage)
    }

    return (
        <section>
            <Container>
                <div className="my-5 text-center">
                    <h1 className='viewSectionTitleLight'>Follow us!</h1>
                </div>
                <div className="my-5 text-center">
                    <Row className="justify-content-md-center">
                        {
                            requiredSocialMediaButtons?.map((item, index) => {
                                return (
                                    <Col key={index} sm={1}>
                                        <a href={item?.href} target='_blank' rel="noreferrer">
                                            {item?.icon}
                                        </a>
                                    </Col>
                                )
                            }
                            )
                        }
                    </Row>
                </div>
            </Container>

        </section>
    )
}

export default SocialMediaSection