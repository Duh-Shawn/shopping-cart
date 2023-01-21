// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import "../styles/shop.scss";
import jsonData from "../data/suits.json";

function Shop(props) {
  //   const [suitProducts, setSuitProducts] = useState();
  const suitProducts = jsonData.products;
  const { handleSubmitToCart } = props;

  //   useEffect(() => {
  //     async function fetchClothesData() {
  //       const options = {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "6321846af9msh04df1c1eb6c2259p140141jsn94da34da46a9",
  //           "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  //         },
  //       };

  //       const response = await fetch(
  //         "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=5678&limit=15&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
  //         options
  //       );

  //       const data = await response.json();
  //       const suitData = await data.products;
  //       setSuitProducts(suitData);
  //     }
  //     fetchClothesData();
  //   }, []);

  return (
    <div className="clothes-card-container">
      {suitProducts &&
        suitProducts.map((suit) => (
          <ItemCard
            key={suit.id}
            suit={suit}
            handleSubmitToCart={handleSubmitToCart}
          />
        ))}
    </div>
  );
}
Shop.propTypes = {
  handleSubmitToCart: PropTypes.func.isRequired,
};

export default Shop;
