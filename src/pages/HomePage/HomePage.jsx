import { BgImg, SearchInput, SearchBtn, Wrapper } from "./HomePage.styled";
import Container from "../../components/Container/Container";
import { AiOutlineSearch } from "react-icons/ai";
import CharacterList from "../../components/CharacterList/CharacterList";
import { useEffect, useState } from "react";
import { getСharacters } from "../../services/apiServices";
import Loader from "../../components/Loader/Loader";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [charactersFilter, setCharactersFilter] = useLocalStorage("saved", "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCharacters() {
      setIsLoading(true);
      try {
        const res = await getСharacters();
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
      <BgImg></BgImg>
      <Wrapper>
        <SearchBtn disabled>
          <AiOutlineSearch size={18} fill="grey" />
        </SearchBtn>
        <SearchInput
          onChange={(e) => setCharactersFilter(e.currentTarget.value)}
          value={charactersFilter || ""}
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
