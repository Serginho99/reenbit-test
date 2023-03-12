import { useLocation } from "react-router-dom";
import CharacterItem from "../CharacterItem/CharacterItem";
import { CharacterListStyled, HelperText } from "./CharacterList.styled";

export default function CharacterList({ characters }) {
  const location = useLocation();
  return (
    <>
      {characters.length === 0 ? (
        <HelperText>There is no such character.</HelperText>
      ) : (
        <CharacterListStyled>
          {characters
            ?.map(({ image, id, name, species }) => (
              <CharacterItem
                key={id}
                img={image}
                name={name}
                species={species}
                id={id}
                location={location}
              />
            ))
            .sort((a, b) => a.props.name.localeCompare(b.props.name))}
        </CharacterListStyled>
      )}
    </>
  );
}
