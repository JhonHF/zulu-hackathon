import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(217, 217, 199);
  background: linear-gradient(
    90deg,
    rgba(217, 217, 199, 1) 0%,
    rgba(184, 231, 222, 1) 35%
  );

  .form {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    background-color: white;
    height: 15rem;
    width: 30rem;
    padding: 1rem;
    text-align: justify;
    box-shadow: 1px 1px 1px 1px gray;

    .payment_method {
      display: flex;
      justify-content: center;
      button {
        border: none;
        padding: 1rem;
        background-color: #554ad5;
        color: white;
      }
    }
  }
`;
