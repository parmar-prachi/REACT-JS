import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaBolt, FaFileAlt, FaStar, FaRegStar } from 'react-icons/fa';

const exploreCourses = [
    {
        id: 1,
        img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2026/03/cousres-27-img-2.png",
        tag: "Music Coach",
        title: "Master Music Coaching: Teach, Train &",
        lessons: 12,
        instructor: "Kevin Perry",
        price: "100.00"
    },
    {
        id: 2,
        img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2026/03/cousres-27-img-3.png",
        tag: "Music Coach",
        title: "The Ultimate Music Coach Training Program",
        lessons: 12,
        instructor: "Kevin Perry",
        price: "89.00"
    },
    {
        id: 3,
        img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2026/03/cousres-27-img-1.png",
        tag: "Music Coach",
        title: "Complete Music Coaching: From Beginner to",
        lessons: 12,
        instructor: "Kevin Perry",
        price: "133.00"
    }
];

const ExploreSection = () => {
    return (
        <section className="explore-section pt pb">
            <Container fluid>
                {/* Centered Header */}
                <div className="text-center mb-5">
                    <div className="top-class-badge mb-2">
                        <FaBolt className="me-2 text-teal" /> Top Class Courses
                    </div>
                    <h2 className="fw-bold section-title-main">Explore Featured Courses</h2>
                </div>

                {/* Course Grid */}
                <Row className="g-4 justify-content-center">
                    {exploreCourses.map((course) => (
                        <Col md={6} lg={4} key={course.id}>
                            <Card className="explore-card">
                                <div className="explore-img-container p-4">
                                    <Card.Img
                                        variant="top"
                                        src={course.img}
                                        className="rounded-4"
                                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                <Card.Body className="px-4 pt-0">
                                    <span className="course-tag mb-4">{course.tag}</span>
                                    <Card.Title className="fw-bold mb-3 explore-title">
                                        {course.title}
                                    </Card.Title>
                                    <div className="text-muted small mb-4">
                                        <FaFileAlt className="me-2 text-teal" /> Lessons {course.lessons} 
                                    </div>

                                    <div className="d-flex align-items-center mb-4">
                                        <div className="instructor-avatar-sm me-2">
                                            <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-9.jpg"
                                                width="35"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="d-block fw-bold small-text">{course.instructor}</span>
                                            <span className="text-teal extra-small-text">Instructor</span>
                                        </div>
                                        <div className="stars-group">
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                                            <span className="ms-1 text-muted fs-6">(0)</span>
                                        </div>
                                    </div>
                                </Card.Body>
                                   <div className='line'></div>
                                <Card.Footer className="bg-white border-top-0 px-4 pb-4 d-flex justify-content-between align-items-center">
                                    <span className="h5 fw-bold mb-0">${course.price}</span>
                                    <Button className="btn-view-details rounded-pill px-4">
                                        View Details
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ExploreSection;