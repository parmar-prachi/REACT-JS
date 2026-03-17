import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Share } from 'react-bootstrap-icons';
import { FaBolt } from 'react-icons/fa';


const instructors = [
    { name: 'William Samuel', role: 'Instructor', img: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-5.png', theme: 'green' },
    { name: 'Olivia Sophia', role: 'Instructor', img: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-6.png', theme: 'orange' },
    { name: 'Jacob Mason', role: 'Instructor', img: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-7.png', theme: 'blue' },
    { name: 'Isabella Grace', role: 'Instructor', img: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-8.png', theme: 'brown' },
];

const InstructorSection = () => {
    return (
        <section className="instructor-section pt pb">
            <Container fluid>
                {/* Header Row */}
                <Row className="align-items-end mb-5">
                    <Col md={8}>
                        <div className="badge-welcome mb-3">
                            <span className="icon-bolt me-1"><FaBolt /></span> Our Instructors
                        </div>
                        <h2 className="display-5 fw-bold text-navy">Meet Our Expert Instructor</h2>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <Button className="btn-contact-us px-4 py-2 rounded-pill">
                            Contact Us
                        </Button>
                    </Col>
                </Row>

                {/* Cards Row */}
                <Row className="g-4">
                    {instructors.map((person, index) => (
                        <Col key={index} xs={12} sm={6} lg={3}>
                            <div className="instructor-card-wrapper">
                                <img src={person.img} alt={person.name} className="instructor-img" />

                                {/* Floating Name Card */}
                                <div className={`instructor-info-card ${person.theme}-theme`}>
                                    <div className="info-content">
                                        <h5 className="mb-0">{person.name}</h5>
                                        <small>{person.role}</small>
                                    </div>
                                    <div className="share-icon-circle">
                                        <Share size={14} />
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

export default InstructorSection;