import { Link, useLocation } from "react-router-dom";
import {
  CharacterItemStyled,
  CharacterImg,
  WrapperInfo,
  CharacterTitle,
  CharacterText,
} from "./CharacterItem.styled";

export default function CharacterItem({ img, name, species, id }) {
  const location = useLocation();
  return (
    <CharacterItemStyled>
      <Link to={`characterInfo/${id}`} state={{ from: location }}>
        <CharacterImg loading="lazy" src={img} alt={name} />
        <WrapperInfo>
          <CharacterTitle>{name}</CharacterTitle>
          <CharacterText>{species}</CharacterText>
        </WrapperInfo>
      </Link>
    </CharacterItemStyled>
  );
}
