import { carouselData } from './Cards/Utilities.js'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";

function CarouselSection() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <section>
            <Container className='my-5'>
                <Slider  {...settings}>
                    {
                        carouselData?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Row className='my-5'>
                                        {
                                            item.map((i, ind) => {
                                                return (
                                                    <Col key={ind} >
                                                        {i.description}
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Slider>

            </Container>

        </section>
    )
}

export default CarouselSection