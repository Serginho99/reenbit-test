import styled from "styled-components";
import titleImg from "../../images/title.png";

export const BgImg = styled.div`
  background-image: url(${titleImg});
  width: 600px;
  height: 200px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  transition: filter 250ms;
  margin: 86px auto 16px auto;
  :hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  padding-left: 48px;
  transition: filter 250ms;
  :hover,
  :focus {
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
