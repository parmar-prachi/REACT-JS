import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Clock } from 'react-bootstrap-icons'; 
import { FaBolt } from 'react-icons/fa';


const newsData = [
    {
        date: "March 6, 2026",
        title: "We teach everyone who wants",
        description: "Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing.",
        image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2026/03/blog-27-img-3.png"
    },
    {
        date: "March 6, 2026",
        title: "Everyone can play the guitar",
        description: "Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing.",
        image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2026/03/blog-27-img-2.png"
    },
    {
        date: "March 6, 2026",
        title: "We love children teach them music",
        description: "Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing.",
        image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2026/03/blog-27-img-1.png"
    }
];

const NewsSection = () => {
    return (
        <section className="news-section py-5">
            <Container>
                <div className="text-center mb-5">
                    <div className="badge-welcome mb-3">
                        <span className="icon-bolt me-1"><FaBolt /></span> News & Blogs
                    </div>
                    <h2 className="fw-bold display-6">Latest News Updates</h2>
                </div>

                <div className="news-list">
                    {newsData.map((item, index) => (
                        <Card key={index} className="news-horizontal-card mb-4 border-light shadow-sm">
                            <Row className="g-0 align-items-center">
                                <Col md={4} className="p-4">
                                    <div className="news-image-wrapper">
                                        <Card.Img src={item.image} alt={item.title} className="rounded-4" />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <Card.Body className="ps-md-4">
                                        <div className="news-meta mb-2">
                                            <Clock className="me-2 text-muted" size={14} />
                                            <small className="text-muted">{item.date}</small>
                                        </div>
                                        <Card.Title className="fw-bold h4 mb-3">{item.title}</Card.Title>
                                        <Card.Text className="text-muted news-description">
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="outline-dark" className="rounded-pill px-4 btn-read-more">
                                            Read More
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default NewsSection;