import * as actionTypes from "../constants/catalogConstants";
import * as productactionTypes from "../constants/productsConstants";
import axios from "axios";

// Define a function to get the API base URL including the API key
const getApiBaseUrl = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  // console.log(`API URL: ${apiUrl}`);
  // Replace 'YOUR_API_KEY' with your actual API key parameter name in the API endpoint
  return apiUrl;
};

export const setFilter = (category) => async (dispatch, getState) => {
  try {
    console.log("in Set filter");
    const { data } = await axios.get(`${getApiBaseUrl()}/category/${category}`);
    console.log("setfilterproduct:", data);

    dispatch({
      type: productactionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
      // payload: {
      //   product: data[0]._id,
      //   name: data[0].name,
      //   img: data[0].img,
      //   price: data[0].price,
      //   category: data[0].category,
      //   countInStock: data.countInStock,
      // },
    });
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};

export const clearFilter = (category) => async (dispatch, getState) => {
  console.log("in Clear filter");
  const { data } = await axios.get(getApiBaseUrl());
  dispatch({
    type: productactionTypes.GET_PRODUCTS_SUCCESS,
    payload: data,
  });
};
