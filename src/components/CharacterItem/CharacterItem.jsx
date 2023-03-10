import {
  CharacterItemStyled,
  CharacterImg,
  WrapperInfo,
  CharacterTitle,
  CharacterText,
} from "./CharacterItem.styled";

export default function CharacterItem({ img, name, species }) {
  return (
    <CharacterItemStyled>
      <CharacterImg loading="lazy" src={img} alt={name} />
      <WrapperInfo>
        <CharacterTitle>{name}</CharacterTitle>
        <CharacterText>{species}</CharacterText>
      </WrapperInfo>
    </CharacterItemStyled>
  );
}
