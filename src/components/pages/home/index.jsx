import React from "react";
import { ProductCard } from "../../molecules/productCard";
import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <ProductCard
        imgSource="https://res.cloudinary.com/vivoboreal/images/f_auto,q_auto/v1609892222/Palma-del-viajero-Ravenala-madagascariensis-vivo-boreal-_y2ch6t/Palma-del-viajero-Ravenala-madagascariensis-vivo-boreal-_y2ch6t.jpg"
        title="Planta"
        price="1"
      />
      <div className="form">
        <p>
          Planta para interiores con matera blanca en combinacion barro y madera
        </p>
        <div className="payment_method">
          <button>💵 Pagar con CriptoPay</button>
        </div>
      </div>
    </HomeContainer>
  );
};
