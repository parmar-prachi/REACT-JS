import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Telephone, Envelope, Facebook, Behance,Instagram, Pinterest, Youtube, ArrowRightShort, CalendarEvent} from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <footer className="footer-section">
            {/* Background Image Container */}
            <div className="footer-bg-overlay ">
                <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/footer-bg.png"/>
            </div>

            <Container fluid className="footer-container">
                {/* Newsletter Box */}
                <div className="newsletter-box">
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h3 className="text-white fw-bold mb-lg-0 mb-4">
                                Subscribe Our Newsletter For Latest Updates
                            </h3>
                        </Col>
                        <Col lg={6}>
                            <div className="newsletter-form-wrapper">
                                <div className="input-group-custom">
                                    <Envelope className="input-icon" />
                                    <input type="email" placeholder="Enter Your E-mail" className="footer-input" />
                                    <Button className="btn-subscribe">Subscribe Now</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Footer Content */}
                <Row className="footer-content gy-5 d-flex justify-content-center">
                    {/* Column 1: Get in Touch */}
                    <Col lg={3} md={6}>
                        <h5 className="footer-title">GET IN TOUCH!</h5>
                        <p className="text-light-opacity small mb-4">
                            Fusce varius, dolor tempor interdum tristique bibendum.
                        </p>
                        <div className="contact-info">
                            <div className="d-flex align-items-center mb-2">
                                <Telephone className="me-2 text-teal" />
                                <span>(702) 123-1478</span>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <Envelope className="me-2 text-teal" />
                                <span>info@company.com</span>
                            </div>
                        </div>
                        <div className="social-links d-flex gap-3">
                            <Facebook className="social-icon" />
                            <Behance className="social-icon" />
                            <Instagram className="social-icon" />
                            <Pinterest className="social-icon" />
                            <Youtube className="social-icon" />
                        </div>
                    </Col>

                    {/* Column 2: Company Info */}
                    <Col lg={2} md={6}>
                        <h5 className="footer-title">COMPANY INFO</h5>
                        <ul className="footer-links list-unstyled">
                            <li><ArrowRightShort className='me-2 fs-3'/> About Us</li>
                            <li><ArrowRightShort className='me-2 fs-3'/> Resource Center</li>
                            <li><ArrowRightShort className='me-2 fs-3'/> Careers</li>
                            <li><ArrowRightShort className='me-2 fs-3'/> Instructor</li>
                            <li><ArrowRightShort className='me-2 fs-3'/> Become A Teacher</li>
                        </ul>
                    </Col>

                    {/* Column 3: Useful Links */}
                    <Col lg={3} md={6}>
                        <h5 className="footer-title">USEFUL LINKS</h5>
                        <ul className="footer-links list-unstyled">
                            <li><ArrowRightShort className='me-2 fs-3'/> All Courses</li>
                            <li><ArrowRightShort className='me-2 fs-3'/> Digital Marketing</li>
                            <li><ArrowRightShort className='me-2 fs-3'/> Design & Branding</li>
                            <li><ArrowRightShort className='me-2 fs-3'/> Storytelling & Voice Over</li>
                            <li><ArrowRightShort className='me-2 fs-3'/> News & Blogs</li>
                        </ul>
                    </Col>

                    {/* Column 4: Recent Posts */}
                    <Col lg={3} md={5}>
                        <h5 className="footer-title">RECENT POST</h5>
                        <div className="recent-post mb-4 d-flex gap-3 align-items-center">
                            <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/footer-post-1.png"  className="post-thumb" />
                            <div>
                                <h6 className="post-title-link">Importance of Arts Integrating</h6>
                                <small className="text-light-opacity"><CalendarEvent className="me-1" /> 20 April, 2024</small>
                            </div>
                        </div>
                        <div className="recent-post d-flex gap-3 align-items-center">
                            <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/footer-post-2.png"  className="post-thumb" />
                            <div>
                                <h6 className="post-title-link">Development Student Best Achievement</h6>
                                <small className="text-light-opacity"><CalendarEvent className="me-1" /> 20 April, 2024</small>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>Copyright © 2025 EdCare. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;