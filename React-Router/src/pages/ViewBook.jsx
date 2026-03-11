import { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ViewBook({ books, setBooks }) {

    const [search, setSearch] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const handleDelete = (id) => {
        const updatedBooks = books.filter((book) => book.b_id !== id);
        setBooks(updatedBooks);
    };

    // 🔎 Search
    let filteredBooks = books.filter((book) =>
        book.type.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

    // 💰 Price Filter
    if (priceFilter === "above500") {
        filteredBooks = filteredBooks.filter((book) => book.price > 500);
    }

    if (priceFilter === "below500") {
        filteredBooks = filteredBooks.filter((book) => book.price <= 500);
    }

    // 🔤 Sorting
    if (sortOrder === "az") {
        filteredBooks = [...filteredBooks].sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    if (sortOrder === "za") {
        filteredBooks = [...filteredBooks].sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Available Books</h2>

            {/* 🔎 Search + Filter + Sort */}
            <div className="d-flex gap-3 mb-3 flex-wrap">

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search by Type or Author..."
                    className="form-control"
                    style={{ maxWidth: "250px" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Filter */}
                <select
                    className="form-select"
                    style={{ maxWidth: "200px" }}
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                >
                    <option value="">Filter by Price</option>
                    <option value="above500">Above ₹500</option>
                    <option value="below500">Below ₹500</option>
                </select>

                {/* Sort */}
                <select
                    className="form-select"
                    style={{ maxWidth: "200px" }}
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Sort by Title</option>
                    <option value="az">A → Z</option>
                    <option value="za">Z → A</option>
                </select>

            </div>

            <Table bordered hover responsive className="book-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Type</th>
                        <th>Publisher</th>
                        <th>Price</th>
                        <th>View-Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredBooks.length === 0 ? (
                        <tr>
                            <td colSpan="9" className="text-center">
                                No Books Found
                            </td>
                        </tr>
                    ) : (
                        filteredBooks.map((book) => (
                            <tr key={book.b_id}>
                                <td>{book.b_id}</td>

                                <td>
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        width="60"
                                        height="80"
                                        style={{ objectFit: "cover" }}
                                    />
                                </td>

                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.type}</td>
                                <td>{book.publisher}</td>
                                <td>₹ {book.price}</td>

                                <td>
                                    <Link to={`/details/${book.b_id}`} className="view-btn">
                                        View Details
                                    </Link>
                                </td>

                                <td>
                                    <Button
                                        as={Link}
                                        to={`/edit/${book.b_id}`}
                                        variant="warning"
                                        size="sm"
                                        className="me-2"
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(book.b_id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default ViewBook;
