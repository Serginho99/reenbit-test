import { BgImg, SearchInput, SearchBtn, Wrapper } from "./HomePage.styled";
import Container from "../../components/Container/Container";
import { AiOutlineSearch } from "react-icons/ai";
import CharacterList from "../../components/CharacterList/CharacterList";
import { useEffect, useState } from "react";
import { getCharacters } from "../../services/apiServices";
import Loader from "../../components/Loader/Loader";
import useLocalStorage from "../../hooks/useLocalStorage";
import desc1x from "../../images/desc-1x.jpg";
import desc2x from "../../images/desc-2x.jpg";
import desc3x from "../../images/desc-3x.jpg";
import mob1x from "../../images/mob-1x.jpg";
import mob2x from "../../images/mob-2x.jpg";
import mob3x from "../../images/mob-3x.jpg";

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [charactersFilter, setCharactersFilter] = useLocalStorage("saved", "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchCharacters() {
      try {
        const res = await getCharacters();
        setCharacters([...res]);
        return res;
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  function getVisibleCharacters() {
    const visibleCharactersFilter = charactersFilter?.toLowerCase();
    return characters.filter((character) =>
      character.name.toLowerCase().includes(visibleCharactersFilter)
    );
  }

  return (
    <Container>
      <picture>
        <source
          srcSet={`${desc1x} 1x, ${desc2x} 2x, ${desc3x} 3x`}
          media="(min-width: 1200px)"
        />
        <source
          srcSet={`${mob1x} 1x, ${mob2x} 2x, ${mob3x} 3x`}
          media="(min-width: 320px)"
        />
        <BgImg src={desc1x} alt="Rick and Morty" />
      </picture>
      <Wrapper>
        <SearchBtn disabled>
          <AiOutlineSearch size={18} fill="grey" />
        </SearchBtn>
        <SearchInput
          onChange={(e) => setCharactersFilter(e.currentTarget.value)}
          value={charactersFilter}
          name="searchCharacters"
          type="text"
          placeholder="Filter by name..."
        />
      </Wrapper>
      {!isLoading ? (
        <CharacterList characters={getVisibleCharacters()} />
      ) : (
        <Loader />
      )}
    </Container>
  );
}
