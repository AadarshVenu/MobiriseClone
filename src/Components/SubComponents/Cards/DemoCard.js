import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DemoCard(props) {

	const { cardsToBeRendered, bgRequired } = props;

	const paraClassRequired = bgRequired ? "paraClass" : "paraClassSmall";


	return (
		<Container fluid="md" >
			<div
				className={`px-5 py-3 ${bgRequired ? "cardWrapper" : "cardWrapperNoBg"}`}
			>
				{cardsToBeRendered?.map((card, index) => {
					return (
						<Row key={index} className='rowClass'>
							{card.textFirst ? (
								<Row className="my-5">
									<Col sm={5}
										style={{
											textAlign: !bgRequired ? "right" : "left"
										}}
									>
										<h1 className="sectionTitle mb-2">{card.title}</h1>
										<p className={paraClassRequired}>{card.description}</p>
									</Col>
									<Col sm={1}>
									</Col>
									<Col sm={6}>
										{
											card.videoPresent ? (

												<video
													className="videoWrapperForDemo"
													autoPlay="true"
													loop="true"
													muted="true"
													playsInline="true"
													data-loaded="true"
												>
													<source
														data-src={card.video}
														type="video/webm"
														src={card.video}
													></source>
													<source
														data-src={card.video}
														type="video/mp4"
														src={card.video}
													></source>
												</video>
											) : (
												<img
													className="videoWrapperForDemo"
													src={card.img}
													alt="img"
												/>
											)
										}

									</Col>
								</Row>
							) : (
								<Row className="my-5">

									<Col sm={6}>
										{
											card.videoPresent ? (

												<video
													className="videoWrapperForDemo"
													autoPlay="true"
													loop="true"
													muted="true"
													playsInline="true"
													data-loaded="true"
												>
													<source
														data-src={card.video}
														type="video/webm"
														src={card.video}
													></source>
													<source
														data-src={card.video}
														type="video/mp4"
														src={card.video}
													></source>
												</video>
											) : (
												<img
													className="videoWrapperForDemo"
													src={card.img}
													alt="img"
												/>
											)
										}

									</Col>
									<Col sm={1}>
									</Col>
									<Col sm={5}>
										<h1 className="sectionTitle mb-2">{card.title}</h1>
										<p className={paraClassRequired}>{card.description}</p>
									</Col>
								</Row>

							)
							}
						</Row>
					);
				})}
			</div >
		</Container>
	);
}

export default DemoCard;
