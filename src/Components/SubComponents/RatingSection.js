import React from 'react'
import { Container } from 'react-bootstrap'
import rating from '../../Images/rating.png'

function RatingSection() {
    return (
        <section>
            <Container>
                <div className="my-4 text-center">
                    <h1 className="textMainAbout fw-bold">Our rating</h1>
                    <div className="paraClass">
                        Mobirise is rated high on many review websites. Check them out!
                    </div>
                    <img src={rating} alt='rating' className='my-5' width='100%'/>
                </div>
            </Container>
        </section>
    )
}

export default RatingSection