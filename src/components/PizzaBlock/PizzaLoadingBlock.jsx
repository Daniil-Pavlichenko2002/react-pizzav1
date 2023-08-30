import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
  return (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="121" r="110" /> 
    <rect x="2" y="288" rx="6" ry="6" width="280" height="84" /> 
    <rect x="0" y="258" rx="0" ry="0" width="280" height="26" /> 
    <rect x="33" y="438" rx="0" ry="0" width="2" height="6" /> 
    <rect x="120" y="380" rx="24" ry="24" width="156" height="43" /> 
    <rect x="144" y="408" rx="0" ry="0" width="1" height="1" /> 
    <rect x="2" y="386" rx="10" ry="10" width="92" height="29" />
  </ContentLoader>
  );
}

export default PizzaLoadingBlock;
