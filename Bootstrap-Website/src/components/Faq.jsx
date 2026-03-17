import React from 'react';
import { Container, Row, Col, Accordion, Badge } from 'react-bootstrap';
import { FaBolt} from 'react-icons/fa';

const FAQSection = () => {
    return (
        <section className="faq-section pt">
            <Container>
                <Row className="align-items-center">
                    {/* Left Side: Image Collage */}
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <div className="collage-container">
                            <div className="collage-grid">
                                <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/faq-img-2.png" className="img-main" />
                                <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/faq-img-3.png" className="img-top-right" />
                                <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/faq-img-4.png" className="img-bottom-right" />
                            </div>

                            {/* Instructor Floating Card */}
                            <div className="floating-card bottom-card-2 shadow p-4">
                                <h6 className="fw-bold">Instructor</h6>
                                <div className="d-flex align-items-center mt-2">
                                    <div className="avatar-group me-2">
                                        <div className="avatar">
                                            <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/faq-thumb-1.png"
                                                width="40"
                                            />
                                        </div>
                                        <div className="avatar">
                                            <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/faq-thumb-2.png"
                                                width="40"
                                            />
                                        </div>
                                        <div className="avatar">
                                            <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/faq-thumb-3.png"
                                                width="40"
                                            />
                                        </div>
                                        <div className="avatar">
                                            <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/faq-thumb-4.png"
                                                width="40"
                                            />
                                        </div>
                                    </div>
                                    <div className="instructor-plus">+</div>
                                    <div>
                                        <h6 className="mb-0 fw-bold instructor-text">200+</h6>
                                        <small>Instructor</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Right Side: FAQ Content */}
                    <Col lg={6}>
                        <div className="ps-lg-4">
                            <div className="badge-trending mb-3">
                                <span className="icon-bolt me-1"><FaBolt /></span>Our Course Categories
                            </div>
                            <h2 className="display-6 fw-bold mb-4">
                                Powerful Dashboard And High Performance Framework
                            </h2>

                            <Accordion defaultActiveKey="0" flush className="custom-accordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>01. What courses do you offer?</Accordion.Header>
                                    <Accordion.Body className='fw-medium text-dark'>
                                        We offer a wide range of courses in various subjects, including science,
                                        technology, engineering, mathematics, humanities, and social sciences.
                                        Our courses are designed for different education levels, from primary school to university.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>02. How Can Teachers Effectively Manage a Diverse Classroom?</Accordion.Header>
                                    <Accordion.Body className='fw-medium text-dark'>
                                        We offer a wide range of courses in various subjects, including science,
                                        technology, engineering, mathematics, humanities, and social sciences.
                                        Our courses are designed for different education levels, from primary school to university.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>03. How Is Special Education Delivered in Inclusive Classrooms?</Accordion.Header>
                                    <Accordion.Body className='fw-medium text-dark'>
                                        We offer a wide range of courses in various subjects, including science,
                                        technology, engineering, mathematics, humanities, and social sciences.
                                        Our courses are designed for different education levels, from primary school to university.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQSection;