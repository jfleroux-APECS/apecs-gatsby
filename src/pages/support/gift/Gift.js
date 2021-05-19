import React, { useState } from "react";
import "./gift.scss";
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
        src="https://www.donnerenligne.fr/apecs-association-pour-l-etude-et-la-conservation-des-selaciens/faire-un-don"
        className="gift-iframe"
        onLoad={onload.bind(this)}
        title="don"
      ></iframe>
    </div>
  );
}

export default Shop;
