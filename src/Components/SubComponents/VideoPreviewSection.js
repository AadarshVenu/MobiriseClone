import React from 'react'
import { Container } from 'react-bootstrap'

function VideoPreviewSection() {
    return (
        <section>
            <div className="cardWrapper text-center py-5">
                <Container>
                    <div className="mt-4 text-center">
                        <h1 className='viewSectionTitle'>Video preview</h1>
                        <p className='paraClass'>Watch the video below to learn more about how to design an attractive website using the <br /> Free Website Building Software.</p>
                    </div>
                    <div className="row justify-content-center mt-5 mx-0 pb-5">
                        <div className="col-12 col-md-10">
                            <div className='videoWrapper'>
                                <iframe width="560" height="315" title='video' className="lozad mbr-embedded-video" data-src="https://www.youtube.com/embed/-BSQlJxCDcI?rel=0&amp;amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;mute=1" frameBorder="0" allowFullScreen="" src="https://www.youtube.com/embed/-BSQlJxCDcI?rel=0&amp;amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;mute=1" data-loaded="true"></iframe>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </section>
    )
}

export default VideoPreviewSection