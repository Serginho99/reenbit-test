import styled from "styled-components";

export const CharacterItemStyled = styled.li`
  cursor: pointer;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  & + & {
    margin-top: 32px;
  }
  height: 308px;

  @media screen and (min-width: 1200px) {
    overflow: hidden;
    width: calc((100% - 155px) / 4);
    height: auto;
    & + & {
      margin-top: 0;
    }
  }
`;

export const CharacterImg = styled.img`
  width: 100%;
  height: 232px;
  @media screen and (min-width: 1200px) {
    height: 168px;
  }
`;

export const WrapperInfo = styled.div`
  padding: 12px 16px;
`;

export const CharacterTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
`;

export const CharacterText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;
