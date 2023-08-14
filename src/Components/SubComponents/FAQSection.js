import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { accordionData } from './Cards/Utilities.js'

function FAQSection() {
    return (
        <section>
            <div className="py-5">
                <Container>
                    <div className="mt-4 text-center">
                        <h1 className='sectionTitle'>FAQ</h1>
                    </div>
                </Container>
                <Container>
                    <div className='accordionDiv'>
                        <Accordion defaultActiveKey="0">
                            {
                                accordionData?.map((item, index) => {
                                    return (
                                        <Accordion.Item key={index} eventKey={index}>
                                            <Accordion.Header>
                                                <p className='paraClassSmall fw-bold'> {item.title}</p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className='paraClassXSmall'> {item.description}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )
                                })
                            }
                        </Accordion>

                    </div>

                </Container>
            </div>
        </section>
    )
}

export default FAQSection