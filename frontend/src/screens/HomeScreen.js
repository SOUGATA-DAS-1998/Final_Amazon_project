// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
// import axios from "axios";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import data from "../data";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  // all hooks section::

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get("/api/products");
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (err) {
    //     setError(err.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((products) => (
            <Product key={products._id} products={products}></Product>
          ))}
        </div>
      )}
    </div>
  );
}
