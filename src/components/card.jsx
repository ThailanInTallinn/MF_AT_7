import {
  CardContainer,
  IconsContainer,
  InfoContainer,
  Name,
  ProfilePic,
  SmallerInfo,
} from "./styledcomponents";

export default function Card() {
  return (
    <CardContainer>
      <InfoContainer>
        <ProfilePic src="https://a.pinatafarm.com/800x450/34164cea84/mike-wazowski-4d795f2a9e2984d3986f7ffe8e2892f4-meme.jpeg" />
        <Name>Mike Wazowski</Name>
        <SmallerInfo>07/12/1984</SmallerInfo>
        <SmallerInfo>Sustos</SmallerInfo>
        <SmallerInfo>Assistente</SmallerInfo>
        <IconsContainer>
          <p>jahsdfjhsf</p>
        </IconsContainer>
      </InfoContainer>
    </CardContainer>
  );
}
