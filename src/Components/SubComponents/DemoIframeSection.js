import React from 'react'
import { Container } from 'react-bootstrap'

function DemoIframeSection() {
    return (
        <section>
            <Container className="row justify-content-center mt-4 mx-auto">
                <div className="col-12 col-md-10">
                    <div className="videoWrapper">
                        <iframe
                            width="560"
                            height="315"
                            title="video"
                            className="lozad mbr-embedded-video"
                            data-src="https://www.youtube.com/embed/-BSQlJxCDcI?rel=0&amp;amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;mute=1"
                            frameBorder="0"
                            allowFullScreen=""
                            src="https://www.youtube.com/embed/-BSQlJxCDcI?rel=0&amp;amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;mute=1"
                            data-loaded="true"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DemoIframeSection