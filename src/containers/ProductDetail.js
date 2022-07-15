import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
  addToCart,
} from "../redux/actions/productActions";

export default function ProductDetail() {
  const { productId } = useParams();
  const detail = useSelector((state) => state.ProductDetail);
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error: " + err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(detail));
  };

  return (
    <>
      {Object.keys(detail).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className="container my-4">
          <h2>Product Details</h2>
          <div className="product-detail d-flex my-4 card w-100">
            <img src={detail.image} alt={detail.title} />
            <div className="border"></div>
            <div className="detail-content">
              <h3>{detail.title}</h3>
              <h5>Price: $ {detail.price}</h5>
              <p>{detail.description}</p>
              <p>
                {" "}
                Rating: ⭐⭐⭐⭐⭐ {detail.rating.rate} ({detail.rating.count})
              </p>
              <h4 className="text-capitalize">Category: {detail.category}</h4>
              <div>
                <button
                  className="btn btn-dark d-inline-block mx-2"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <NavLink className="btn btn-dark d-inline-block" to="/products">
                  Back to Products
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
