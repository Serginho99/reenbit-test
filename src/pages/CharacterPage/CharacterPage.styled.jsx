import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top: 23px;
  transition: text-shadow 250ms;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 78px;

  :hover,
  :focus {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media screen and (min-width: 1200px) {
    margin-left: 50px;
    margin-top: 21px;
    margin-bottom: 31px;
  }
`;

export const SvgBack = styled(BiArrowBack)`
  margin-right: 8px;
`;

export const ImgCharacter = styled.img`
  display: block;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
  width: 150px;
  height: 148px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 34px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 16px;
    width: 300px;
    height: 300px;
  }
`;

export const CharacterWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleCharacter = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  margin-bottom: 34px;
  @media screen and (min-width: 1200px) {
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 48px;
  }
`;

export const InfoOfCharacter = styled.p`
  margin-left: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #8e8e93;
  @media screen and (min-width: 1200px) {
    margin-bottom: 48px;
    text-align: center;
  }
`;

export const ListInfoCharacter = styled.ul`
  margin: 16px 32px 85px 24px;
  padding-left: 16px;
  width: 310px;

  @media screen and (min-width: 1200px) {
    display: block;
    margin-left: auto;
    width: 413px;
    margin-right: auto;
    padding-top: 9px;
    margin-bottom: 142px;
  }
`;

export const ItemListCharacter = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  & + & {
    padding-top: 9px;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
  margin-bottom: 11px;
`;
