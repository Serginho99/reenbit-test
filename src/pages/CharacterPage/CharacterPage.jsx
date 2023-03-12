import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCharacterById } from "../../services/apiServices";
import Loader from "../../components/Loader/Loader";

import {
  LinkBack,
  ImgCharacter,
  TitleCharacter,
  InfoOfCharacter,
  ListInfoCharacter,
  ItemListCharacter,
  Title,
  Text,
  SvgBack,
  Wrapper,
} from "./CharacterPage.styled";

export default function CharacterPage() {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchCharacterById() {
      setIsLoading(true);
      try {
        const res = await getCharacterById(id);
        setCharacterInfo({ ...res });
        return res;
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (characterInfo) {
      fetchCharacterById();
    }
  }, [id]);

  if (!characterInfo) {
    return;
  }

  const { image, name, gender, status, species, origin, type } = characterInfo;

  const backLink = location.state?.from ?? "/";

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          {" "}
          <LinkBack to={backLink}>
            <SvgBack />
            GO BACK
          </LinkBack>
          <ImgCharacter src={image} alt={name} />
          <TitleCharacter>{name}</TitleCharacter>
          <InfoOfCharacter>Informations</InfoOfCharacter>
          <ListInfoCharacter>
            <ItemListCharacter>
              <Title>Gender</Title>
              <Text>{gender}</Text>
            </ItemListCharacter>
            <ItemListCharacter>
              <Title>Status</Title>
              <Text>{status}</Text>
            </ItemListCharacter>
            <ItemListCharacter>
              <Title>Specie</Title>
              <Text>{species}</Text>
            </ItemListCharacter>
            <ItemListCharacter>
              <Title>Origin</Title>
              <Text>{origin?.name}</Text>
            </ItemListCharacter>
            <ItemListCharacter>
              <Title>Type</Title>
              <Text>{type ? type : "Unknown"}</Text>
            </ItemListCharacter>
          </ListInfoCharacter>
        </Wrapper>
      )}
    </>
  );
}
