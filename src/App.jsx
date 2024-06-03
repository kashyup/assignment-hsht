// App.js
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import SideNavigationComponent from "./components/SideNavigationComponent";
import Checkout from "./components/Checkout";
import { fetchProducts } from "./api/api";
import { ShopProvider } from "./context/ShopContext";
import "./components/MyComponent.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCheckout, setShowCheckout] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowCheckout(false);  // Ensure that selecting a category hides the checkout view
  };

  const handleShowCheckout = () => {
    setShowCheckout(true);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    if (showCheckout) {
      setShowCheckout(false);  // Switch to product view if currently in checkout view
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.type === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ShopProvider>
      <div className="component">
        <div className="header-container">
          <Header
            onShowCheckout={handleShowCheckout}
            searchQuery={searchQuery}
            setSearchQuery={handleSearchQueryChange}
          />
        </div>
        <Categories onCategoryChange={handleCategoryChange} />
        {showCheckout ? (
          <Checkout />
        ) : (
          <>
            <div className="custom-product-container">
              <div className="product-page-heading">Trending Products</div>
              <div className="product-box">
                <div className="box">
                  <div className="products">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        description={product.description}
                        price={parseFloat(product.price.replace("£", "")).toFixed(2)}
                        imgSrc={product.img}
                        available={product.available}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ShopProvider>
  );
}

export default App;
