import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBolt, FaArrowRight, FaMousePointer, FaCode,FaUserTie, FaLaptopCode, FaBezierCurve} from 'react-icons/fa';

const categories = [
    { id: 1, title: "UI/UX Design Service", img:"https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-feature-1.png"},
    { id: 2, title: "Software Development", img:"https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-2.png"},
    { id: 3, title: "Digital Marketing" , img:"https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-3.png"},
    { id: 4, title: "Self Managments", img:"https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-4.png"},
    { id: 5, title: "Application Development", img:"https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-5.png"},
    { id: 6, title: "UI/UX Graphic Design", img:"https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-6.png" },
];

const CategorySection = () => {
    return (
        <section className="pt">
            <Container fluid className='category-section'>
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-end mb-5">
                    <div className='mt-5'>
                        <div className="category-badge mb-2">
                            <FaBolt className="me-2 text-teal" /> Our Course Categories
                        </div>
                        <h2 className="text-white fw-bold display-5">Featured Courses</h2>
                    </div>
                    <Button className="btn-browse-teal rounded-pill px-4 py-2">
                        Browse All Courses <FaArrowRight className="ms-2" />
                    </Button>
                </div>

                {/* Categories Grid */}
                <Row className="g-4">
                    {categories.map((cat) => (
                        <Col xs={12} sm={6} md={4} lg={2} key={cat.id}>
                            <div className="category-card shadow-sm">
                                <div className="category-icon-circle">
                                    <img src={cat.img} /> 
                                </div>
                                <h6 className="category-title">{cat.title}</h6>
                                <div className="category-arrow">
                                    <FaArrowRight />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CategorySection;