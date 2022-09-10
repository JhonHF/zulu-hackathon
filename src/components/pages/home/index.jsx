import React from "react";
import { ProductCard } from "../../molecules/productCard";
import { HomeContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleConnectWallet = () => {
    navigate("/payment_gateway");
  };
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
          <button onClick={handleConnectWallet}>💵 Pagar con CriptoPay</button>
        </div>
      </div>
    </HomeContainer>
  );
};
