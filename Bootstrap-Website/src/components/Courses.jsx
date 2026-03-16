import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaBolt, FaArrowRight, FaFileAlt, FaStar, FaRegStar } from 'react-icons/fa';


const courses = [
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
    },
    {
        id: 4,
        img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2026/02/course-23-img-2.png",
        tag: "Yoga Instructor",
        title: "A 6-Week Guided Yoga Program for",
        lessons: 14,
        instructor: "Kevin Perry",
        price: "99.00"
    }
];

const CourseSection = () => {
    return (
        <section className="course-section pt pb">
            <Container fluid>
                {/* Header Area */}
                <div className="d-flex justify-content-between align-items-end mb-5">
                    <div>
                        <div className="badge-trending mb-3">
                            <span className="icon-bolt me-1"><FaBolt /></span> Trending Courses
                        </div>
                        <h2 className="fw-bold section-title">Featured Courses</h2>
                    </div>
                    <Button className="btn-browse-all rounded-pill px-4 py-2">
                        Browse All Courses <FaArrowRight className="ms-2" />
                    </Button>
                </div>

                {/* Course Grid */}
                <Row className="g-4">
                    {courses.map((course) => (
                        <Col lg={6} key={course.id}>
                            <Card className="course-card border-0 shadow-sm h-100 overflow-hidden">
                                <Row className="g-0 h-100">
                                    <Col md={5}>
                                        <div className="course-img-wrapper h-100">
                                            <Card.Img src={course.img} className="h-100 object-fit-cover rounded-0" />
                                        </div>
                                    </Col>
                                    <Col md={7}>
                                        <Card.Body className="d-flex flex-column justify-content-between p-4">
                                            <div>
                                                <span className="course-tag mb-4">{course.tag}</span>
                                                <Card.Title className="fw-bold mb-3 h5">{course.title}</Card.Title>
                                                <p className="text-muted small mb-3">
                                                    <FaFileAlt className="me-2 text-teal" /> {course.lessons} Lessons
                                                </p>

                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="instructor-avatar me-2">
                                                        <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-9.jpg"
                                                            width="35"
                                                        />
                                                    </div>
                                                    <div className="me-auto">
                                                        <span className="d-block fw-bold small">{course.instructor}</span>
                                                        <span className="text-teal small">Instructor</span>
                                                    </div>
                                                    <div className="stars text-muted small">
                                                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /> (0)
                                                    </div>
                                                </div>
                                            </div>FaRegStar                                        <hr className="my-3 opacity-10" />

                                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                                <span className="h5 fw-bold mb-0">${course.price}</span>
                                                <Button variant="outline-secondary" className="btn-details rounded-pill px-3 py-1 btn-sm">
                                                    View Details
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CourseSection;