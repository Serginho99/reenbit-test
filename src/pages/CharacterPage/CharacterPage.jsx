import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "./CharacterPage.styled";

export default function UserInfoPage() {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchCharacterById() {
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
    fetchCharacterById();
  }, []);

  const { image, name, gender, status, species, origin, type } = characterInfo;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <LinkBack to="/">
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
        </>
      )}
    </>
  );
}
