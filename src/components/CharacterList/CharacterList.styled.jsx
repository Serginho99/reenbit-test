import styled from "styled-components";

export const CharacterListStyled = styled.ul`
  margin-top: 32px;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 20px;
    margin-top: 61px;
  }
`;

export const HelperText = styled.p`
  text-align: center;
  margin-top: 40px;
`;
