import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaBolt } from 'react-icons/fa';

const testimonials = [
    {
        text: "I've been thoroughly impressed with how engaging and interactive the courses are on this platform. The use of multimedia, quizzes, and live sessions makes learning enjoyable and keeps me motivated.",
        name: "Julian Walker",
        role: "Director, 7Eleven",
        image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/testi-author-4.png"
    },
    {
        text: "I've been thoroughly impressed with how engaging and interactive the courses are on this platform. The use of multimedia, quizzes, and live sessions makes learning enjoyable and keeps me motivated.",
        name: "Henry Baker",
        role: "Director, Puzzle Huddle",
        image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/testi-author-1.png"
    },
    {
        text: "I've been thoroughly impressed with how engaging and interactive the courses are on this platform. The use of multimedia, quizzes, and live sessions makes learning enjoyable and keeps me motivated.",
        name: "Michael Thomas",
        role: "Director, Plan4Demand",
        image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/testi-author-2.png"
    }
];

const TestimonialSection = () => {
    return (
        <section className="testimonial-section text-center ">

            <div className="shape-circle">
                <img src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/testi-shape-1.png"/>
            </div>
            <div className='shape-circle-2'>
                <img src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/testi-shape-2.png"/>
            </div>

            <Container fluid className="position-relative py-5">
                <div className="mb-4">
                    <div className="badge-welcome mb-3">
                        <span className="icon-bolt me-1"><FaBolt /></span> Our Testimonials
                    </div>
                    <h2 className="text-white fw-bold mb-5">
                        What Students Think and Say About EdCare
                    </h2>
                </div>

                <Row className="g-4">
                    {testimonials.map((item, index) => (
                        <Col key={index} lg={4} md={6}>
                            <div className="testimonial-card text-start h-100">
                                <p className="testimonial-text text-muted mb-4">
                                    "{item.text}"
                                </p>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="user-avatar rounded-circle me-3"
                                    />
                                    <div className="user-details">
                                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                                        <small className="text-teal-accent">{item.role}</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default TestimonialSection;