import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const [searchParameters, setsearchParameters] = useState({
        bookTitle: "",
        author: "",
        genre: ""
    })


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

    const handleChange = (e) => {
        const { id, value } = e.target;
        // console.log(id,value)
        setsearchParameters((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (!searchParameters.bookTitle && !searchParameters.author && !searchParameters.authorgenre) {
            alert("Please fill at least one field");
            return;
        }
        navigate('/bookSearch', {state : searchParameters})
        // You can add logic to fetch recommendations based on genre and author
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
            <h1 className="text-primary mb-4">Book Recommendation System</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded w-50">
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">
                        <strong>Title</strong>
                    </label>
                    <input
                        type="text"
                        id="bookTitle"
                        placeholder="Enter Author Name"
                        className="form-control"
                        value={searchParameters.bookTitle}
                        onChange={handleChange}
                    />
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
                        value={searchParameters.author}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">
                        <strong>Genre</strong>
                    </label>
                    <select
                        id="genre"
                        className="form-select"
                        value={searchParameters.genre}
                        onChange={handleChange}
                    >
                        <option value="">Select Genre</option>
                        {genres.map((g) => (
                            <option key={g} value={g}>
                                {g}
                            </option>
                        ))}
                    </select>

                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Get Recommendations
                </button>
            </form>
        </div>
    );
};

export default Home;
