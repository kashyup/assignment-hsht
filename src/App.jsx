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
  };

  const handleShowCheckout = () => {
    setShowCheckout(true);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.type === selectedCategory);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ShopProvider>
      <div className="my-component">
        <Header onShowCheckout={handleShowCheckout} />
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
                        price={parseFloat(
                          product.price.replace("£", "")
                        ).toFixed(2)}
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
