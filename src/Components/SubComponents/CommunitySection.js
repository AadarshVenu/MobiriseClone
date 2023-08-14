import React from 'react'
import { Container } from 'react-bootstrap'

function CommunitySection() {
    return (
        <section>
            <Container>
                <div className="mt-4 text-center px-5">
                    <h1 className="textMainAbout fw-bold">Our great user community</h1>
                    <div className="paraClass">
                        We have thousands of happy clients all over the world!
                    </div>
                    <img
                        src={"https://mobirise.com/assets52/images/clients.webp"}
                        alt="hero"
                        className="my-5"
                        width="100%"
                    />
                </div>
            </Container>
        </section>
    )
}

export default CommunitySection