import styled from "styled-components";

export const BgImg = styled.img`
  display: block;
  width: 310px;
  height: 104px;
  margin: 0 auto;
  margin-bottom: 32px;
  @media screen and (min-width: 1200px) {
    width: 600px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 16px;
  }
`;

export const SearchInput = styled.input`
  height: 56px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  padding: 0;
  padding-left: 48px;
  transition: filter 250ms;
  width: 100%;
  :hover,
  :focus {
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media screen and (min-width: 1200px) {
    max-width: 100%;
    width: 100%;
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
  width: 310px;
  text-align: center;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    /* max-width: 100%; */
    width: 100%;
  }
`;
