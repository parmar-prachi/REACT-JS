import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';


const AboutBanner = () => {

    const bgImage = "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/cta-bg-img.png";

    const bannerStyle = {
        backgroundImage: `linear-gradient(to right, #1e292d 30%, rgba(30, 41, 45, 0.6) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    };

    return (
        <section style={bannerStyle} className="about-banner-section">


                <img src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/dot-shape.png" className="deco-dots"/>
            
            
                <img src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/cta-shape-2.png"  className="deco-ring"/>
            

            <Container fluid className="position-relative ms-0" style={{ zIndex: 2 }}>
    
                        <div className="banner-content text-white">
                            <h2 className="display-5 fw-bold mb-4">
                                50% Offer For Very First 50 Student's & Mentors
                            </h2>
                            <p className="lead mb-5 pe-lg-5 fs-6 fw-normal">
                                The ability to learn at my own pace was a game-changer for me.
                                The flexible schedule allowed me to balance my studies with
                                work and personal life, making it possible to complete the
                                course without feeling overwhelmed.
                            </p>

                            <div className="d-flex flex-wrap gap-3">
                                <Button className="btn-teal-full rounded-pill px-4 py-3 border-0">
                                    Become A Student <FaArrowRight className="ms-2" />
                                </Button>
                                <Button variant="outline-light" className="btn-outline-white rounded-pill px-4 py-3">
                                    Become A Teacher <FaArrowRight className="ms-2" />
                                </Button>
                            </div>
                        </div>
            </Container>
        </section>
    );
};

export default AboutBanner;