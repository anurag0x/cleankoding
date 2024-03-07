import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setProducts(data);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products
    .filter(
      (product) => !selectedCategory || product.category === selectedCategory
    )
    .filter(
      (product) =>
        !searchTerm ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cleankoding</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {!loading && !error && (
        <div>
          <div style={styles.filtersContainer}>
            <label htmlFor="category" style={styles.label}>
              Select a category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={styles.select}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
          </div>
          <div style={styles.productsContainer}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={styles.productImage}
                />
                <h2 style={styles.productTitle}>{product.title}</h2>
                {/* <p style={styles.productDescription}>{product.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: 20,
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  filtersContainer: {
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
  },
  select: {
    marginRight: 10,
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
  },
  searchInput: {
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
  },
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 40,
  },
  productCard: {
    border: "1px solid #ccc",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
  },
  productImage: {
    width: "250px",
    height: "250px",
    borderRadius: 5,
  },
  productTitle: {
    fontSize: 18,
    marginTop: 10,
  },
  productDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
  },
};

export default App;
