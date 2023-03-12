import styled from "styled-components";

export const CharacterListStyled = styled.ul`
  display: block;
  margin: 32px auto 0px auto;
  width: 310px;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 20px;
    margin-top: 61px;
    width: 100%;
  }
`;

export const HelperText = styled.p`
  text-align: center;
  margin-top: 40px;
`;
