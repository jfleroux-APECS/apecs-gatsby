import React, { useState } from "react";
import "./shop.scss";
import Loader from "../../../components/loader/Loader";

function Shop() {
  const [isLoading, setIsLoading] = useState(true);

  const onload = function (iframe) {
    window.scroll(0, iframe.offsetTop);
    setIsLoading(false);
  };

  return (
    <div>
      <Loader isActive={isLoading} />
      <iframe
        id="haWidget"
        scrolling="auto"
        src="https://www.helloasso.com/associations/apecs-association-pour-l-etude-et-la-conservation-des-selaciens/evenements/boutique/widget"
        className="shop-iframe"
        onLoad={onload.bind(this)}
        title="Boutique"
      ></iframe>
    </div>
  );
}

export default Shop;
