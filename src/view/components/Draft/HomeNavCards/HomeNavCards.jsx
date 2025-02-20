import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./HomeNavCards.css"
const HomeNavCards = () => {
    const cardData = [
        {
            title: "WHO WE ARE",
            content: "Under the virtuous leadership of Smt. Nita M Ambani, Reliance Foundation was set up in 2010 to provide impetus to various philanthropic initiatives of Reliance Industries ltd.",
        },
        {
            title: "WHAT WE DO",
            content: "Rural Transformation, Health, Education, Sports for Development, Women Empowerment, Disaster Management, Arts, Culture & Heritage and Urban Renewal.",
        },
        {
            title: "MEDIA",
            content: "Real-life stories of people whose lives have been touched by Reliance Foundation; Photos, Videos, News, Press Releases and Events & Updates.",
        },
        {
            title: "CAUTION NOTICE",
            content: "Stay informed — read our caution notice to protect yourself from fraud.",
        }
    ]
    return (
        <Container className="py-5">
            <Row>
                {cardData.map((card, index) => (
                    <Col md={3} sm={6} className="mb-4" key={index}>
                        <Card className="h-100 border-light shadow-sm">
                            <Card.Body className="text-center">
                                <Card.Title className='home-nav-card'>
                                    <h3 className="text-success mb-4" style={{ fontSize: '1.5rem' }}>
                                        {card.title}
                                    </h3>
                                </Card.Title>
                                <Card.Text className="card-content mb-4 lh-lg fw-normal">
                                    {card.content}
                                </Card.Text>
                                <Button
                                    variant="success"
                                    className="px-4 btn-success"
                                >
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomeNavCards;