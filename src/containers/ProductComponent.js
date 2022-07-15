import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../redux/actions/productActions";

export default function ProductComponent() {
  const allProducts = useSelector((state) => state.Products.products);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(allProducts);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleFilter = (filter) => {
    setProducts(allProducts);
    setProducts((prevProduct) => {
      return prevProduct.filter((item) => {
        return item.category === filter;
      });
    });
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  return (
    <>
      <div className="filter-button">
        Sorting by:
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => setProducts(allProducts)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => handleFilter("men's clothing")}
        >
          Men's clothing
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => handleFilter("women's clothing")}
        >
          Women's clothing
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => handleFilter("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => handleFilter("electronics")}
        >
          Electronic
        </button>
      </div>
      <div className="container product-listing">
        {products.map((product) => {
          const { id, title, price, category, image, rating } = product;
          return (
            <div className="card product-container" key={id}>
              <div className="container product text-dark text-decoration-none">
                <img src={image} height="200px" alt={title} />
                <div className="product-content">
                  <div className="product-content-detail">
                    <h6>{title}</h6>
                    <h5>$ {price}</h5>
                    <p className="text-capitalize m-0">{category}</p>
                    <p>
                      ⭐⭐⭐⭐⭐{" "}
                      <span className="d-inline">
                        {rating.rate} ({rating.count})
                      </span>
                    </p>
                  </div>
                  <div className="button">
                    <button
                      className="button-navlink btn btn-dark btn-sm"
                      onClick={(e) => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <NavLink
                      className="button-navlink btn btn-dark btn-sm"
                      to={`/product/${id}`}
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
