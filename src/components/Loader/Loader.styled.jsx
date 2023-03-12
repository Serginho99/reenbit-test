import styled, { keyframes } from "styled-components";

export const LoaderBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: 0.6s;
  min-height: 100vh;
`;

const rotation = keyframes`
   0% {
     transform: rotate(0deg);
   }
   100% {
     transform: rotate(360deg);
   }
`;

export const LoaderStyled = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid green;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
