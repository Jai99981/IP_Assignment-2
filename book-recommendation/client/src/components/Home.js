import React, { useState } from "react";

const Home = () => {
    const [genre, setGenre] = useState("");
    const [author, setAuthor] = useState("");

    const genres = [
        "Fiction",
        "Non-Fiction",
        "Science Fiction",
        "Fantasy",
        "Mystery",
        "Biography",
        "Romance",
        "Thriller",
        "Self-Help",
        "History"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log(`Selected Genre: ${genre}`);
        console.log(`Author Name: ${author}`);
        // You can add logic to fetch recommendations based on genre and author
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
            <h1 className="text-primary mb-4">Book Recommendation System</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded w-50">
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">
                        <strong>Genre</strong>
                    </label>
                    <select
                        id="genre"
                        className="form-select"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value="">Select Genre</option>
                        {genres.map((g) => (
                            <option key={g} value={g}>
                                {g}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">
                        <strong>Author Name</strong>
                    </label>
                    <input
                        type="text"
                        id="author"
                        placeholder="Enter Author Name"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Get Recommendations
                </button>
            </form>
        </div>
    );
};

export default Home;
