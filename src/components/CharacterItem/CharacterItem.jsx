import { Link, useLocation } from "react-router-dom";
import {
  CharacterItemStyled,
  CharacterImg,
  WrapperInfo,
  CharacterTitle,
  CharacterText,
} from "./CharacterItem.styled";

export default function CharacterItem({ img, name, species, id, location }) {
  // const locationBack = useLocation();
  return (
    <CharacterItemStyled>
      <Link state={{ from: location }} to={`/${id}`}>
        <CharacterImg loading="lazy" src={img} alt={name} />
        <WrapperInfo>
          <CharacterTitle>{name}</CharacterTitle>
          <CharacterText>{species}</CharacterText>
        </WrapperInfo>
      </Link>
    </CharacterItemStyled>
  );
}
