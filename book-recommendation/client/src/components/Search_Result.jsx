import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Cards from "./Cards";

export default function Search_Result({ searchParameters }) {
    const navigate = useNavigate()
    const location = useLocation();
    // const authenticated = location.state;

    const [state, setState] = useState('loading');
    // const [search, setSearch] = useState("")

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            setError(null);

            try {
                // Adjust the URL and request params as needed for your API
                const response = await axios.get('/api/searchbooks', {
                    params: {
                        title: searchParameters.bookTitle,
                        author: searchParameters.author,
                        genre: searchParameters.genre
                    }
                });
                console.log(response)

                setResults(response.data);
                console.log(results)  // Assuming the data is in response.data
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        // Only fetch results if search parameters are provided
        if (searchParameters.bookTitle || searchParameters.author || searchParameters.genre) {
            fetchResults();
        }
    }, [searchParameters]);  // Runs whenever searchParameters change

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (

        <div>
            <div>
                <>

                    {Array.from({ length: results.length }, (_, index) => (
                        <Cards
                        key={index}
                        Title={results[index].Title}
                        Image={results[index].Image}
                        Author={results[index].Author}
                        Genres={results[index].Genres} />//
                    ))}
                </>

            </div>
        </div>

    )
}