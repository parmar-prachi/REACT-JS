import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaSearch, FaArrowRight, FaBolt, FaUser } from 'react-icons/fa';


const Hero = () => {
    return (
        <section className="hero-section">
            <Container fluid>
                <Row className="align-items-center">
                    {/* Left Side: Content */}
                    <Col lg={6} className="hero-content py-5">
                        <div className="badge-welcome mb-3">
                            <span className="icon-bolt me-1"><FaBolt /></span> Welcome to Online Education
                        </div>

                        <h1 className="display-4 fw-bold mb-4">
                            Start learning from the world’s best sites
                        </h1>

                        <p className="text-muted mb-5 pe-lg-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>

                        {/* Search Bar */}
                        <div className="search-container mb-5">
                            <InputGroup className="custom-search shadow-sm">
                                <InputGroup.Text className="bg-white border-0 ps-4">
                                    <FaSearch className="text-muted" />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="What do you want to learn today?"
                                    className="border-0 shadow-none py-3"
                                />
                                <Button className="btn-search rounded-pill m-2 me-3 px-5 p-2">
                                    Search Now <FaArrowRight className="ms-2" />
                                </Button>
                            </InputGroup>
                        </div>

                        {/* Stats */}
                        <div className="d-flex gap-5 stats-wrapper">
                            <div className="d-flex align-items-center gap-3">
                                <div className="stat-icon">
                                    <img
                                        src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-1.png"
                                        width="40"
                                    />
                                </div>
                                   
                                <div>
                                    <h3 className="fw-bold mb-0">9.5K+</h3>
                                    <small className="text-muted">Total active students taking gifted courses</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="stat-icon ">
                                    <img
                                        src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-2.png"
                                        width="40"
                                    />
                                </div>
                                <div>
                                    <h3 className="fw-bold mb-0">15.5K+</h3>
                                    <small className="text-muted">Total active students taking gifted courses</small>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Right Side: Image with Floating Cards */}
                    <Col lg={6} className="hero-image-container position-relative">
                        <div className="image-mask">
                            <img
                                src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/hero-bg.png"
                                className="hero-img"
                            />
                        </div>

                        {/* Floating Card 1 */}
                        <div className="floating-card top-card shadow p-2">
                            <div className="user-icon me-2"><FaUser /></div>
                            <div>
                                <h6 className="mb-0 fw-bold">256+</h6>
                                <small>Crashed Courses</small>
                            </div>
                        </div>

                        {/* Floating Card 2 */}
                        <div className="floating-card bottom-card shadow p-3">
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
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;