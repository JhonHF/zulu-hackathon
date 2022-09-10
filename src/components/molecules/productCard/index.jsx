import React from "react";
import { Card } from "../../atoms/card";
import { TitleContainer } from "./styles";

export const ProductCard = ({ imgSource, title, price }) => {
  return (
    <Card>
      <TitleContainer>
        <span>{title}</span>
      </TitleContainer>
      <img src={imgSource} height="180px" />
      <div>
        <p>MATIC: {price}</p>
      </div>
    </Card>
  );
};
