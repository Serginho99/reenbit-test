import { BgImg, SearchInput, SearchBtn, Wrapper } from "./HomePage.styled";
import Container from "../../components/Container/Container";
import { AiOutlineSearch } from "react-icons/ai";

export default function HomePage() {
  return (
    <Container>
      <BgImg></BgImg>
      <form>
        <Wrapper>
          <SearchBtn>
            <AiOutlineSearch size={18} fill="grey" />
          </SearchBtn>
          <SearchInput type="text" placeholder="Filter by name..." />
        </Wrapper>
      </form>
    </Container>
  );
}
