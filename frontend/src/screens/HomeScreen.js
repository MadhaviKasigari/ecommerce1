import "./HomeScreen.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import {
  setFilter,
  clearFilter,
  getProducts,
} from "../redux/actions/catalogActions";
import { useSelector, useDispatch } from "react-redux";

// components
import Product from "../components/Product";

// Actions
import { products as listProducts } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";
// import CategoryItem from "../components/categoryItem";

const HomeScreen = ({
  categories,
  onSetFilter,
  onClearFilter,
  onAddToCart,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsState = useSelector((state) => {
    console.log("Whole State:", state);
    return state.products;
  });
  console.log("getproducts:", productsState);
  const { products, loading, error } = productsState;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const filterProduct = (category) => {
    console.log(category);
    dispatch(setFilter(category));
  };

  const handleClearFilter = (category) => {
    dispatch(clearFilter(category));
  };

  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Let's Shop</h2>
      <button
        className="product-filters"
        onClick={() => filterProduct("Electronics")}
      >
        Electronics
      </button>
      <button
        className="product-filters"
        onClick={() => filterProduct("Furniture")}
      >
        Furniture
      </button>
      <button
        className="product-filters"
        onClick={() => filterProduct("Home Appliance")}
      >
        Home Appliances
      </button>
      <button className="product-filters clear-btn" onClick={handleClearFilter}>
        Clear Filter
      </button>
      <div className="homescreen_products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>(error)</h2>
        ) : (
          products &&
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              category={product.category}
              countInStock={product.countInStock}
              img={product.img}
            />
          ))
        )}
      </div>{" "}
    </div>
  );
};

export default HomeScreen;
