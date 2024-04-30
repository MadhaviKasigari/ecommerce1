import React from "react";
import ecomshop from "./ecom-shop.jpg";

const ShopScreen = () => {
  return (
    <div className="ecomshop">
      {/* <div style={{ height: 500, width: 300 }}> */}
      {/* <img src={ecomshop} height={300} width={300} alt="ecomshop" /> */}
      <img
        src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
    // </div>
  );
};

export default ShopScreen;
