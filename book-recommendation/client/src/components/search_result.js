import React, { useState } from "react";

const BookSearch = () => {
  // State to manage input values
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (!bookTitle && !author && !genre) {
      alert("Please fill at least one field");
      return;
    }
    alert(`Searching for:\nTitle: ${bookTitle || "Any"}\nAuthor: ${author || "Any"}\nGenre: ${genre || "Any"}`);
  };

  // Function to reset input fields
  const handleReset = () => {
    setBookTitle("");
    setAuthor("");
    setGenre("");
  };

  // Function to toggle the side menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Button to toggle side menu on mobile */}
      <button style={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Side Menu for mobile devices */}
      {isMenuOpen && (
        <div style={styles.sideMenu}>
          <h2 style={styles.menuHeader}>Search for Books</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="bookTitle" style={styles.label}>Book Title</label>
              <input
                type="text"
                id="bookTitle"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                placeholder="Enter book title"
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="author" style={styles.label}>Author</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="genre" style={styles.label}>Genre</label>
              <select
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                style={styles.select}
              >
                <option value="">Select Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Romance">Romance</option>
              </select>
            </div>

            <div style={styles.buttons}>
              <button type="submit" style={styles.submitButton}>Submit</button>
              <button type="button" style={styles.resetButton} onClick={handleReset}>Reset</button>
            </div>
          </form>
        </div>
      )}

      {/* Main content area */}
      <div style={styles.mainContent}>
        <h2 style={styles.header}>Book Recommendation System</h2>
        {/* Empty div in the middle */}
        <div style={styles.emptyDiv}></div>

        {/* Footer at the bottom */}
        <footer style={styles.footer}>
          &copy; 2024 Book Recommendation System
        </footer>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  pageContainer: {
    display: "flex",
    minHeight: "100vh",
  },
  menuButton: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "#5bc0de",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  sideMenu: {
    width: "250px",
    backgroundColor: "#f4f4f9",
    padding: "20px",
    borderRight: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
  },
  menuHeader: {
    textAlign: "center",
    marginBottom: "20px",
  },
  mainContent: {
    flexGrow: 1,
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column", // Stack vertically in side menu
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  select: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#5cb85c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  },
  resetButton: {
    padding: "10px 20px",
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  emptyDiv: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    color: "#666",
    backgroundColor: "#fff",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    position: "relative",
    bottom: 0,
    width: "100%",
  },
};

export default BookSearch;
