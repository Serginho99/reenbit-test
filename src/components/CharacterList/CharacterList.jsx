import { useEffect, useState } from "react";
import { getСharacters } from "../../services/apiServices";
import CharacterItem from "../CharacterItem/CharacterItem";
import { CharacterListStyled } from "./CharacterList.styled";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await getСharacters();
        setCharacters([...res]);
        return res;
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchCharacters();
  }, []);

  return (
    <>
      <CharacterListStyled>
        {characters?.map(({ image, id, name, species }) => (
          <CharacterItem
            key={id}
            img={image}
            name={name}
            species={species}
            id={id}
          />
        ))}
      </CharacterListStyled>
    </>
  );
}
