import styled from "styled-components";

export const GNBTitle = styled.p`
  margin-left: 1em;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Header = styled.nav`
  height: 10vh;
  background-color: #5568af;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  min-width: 600px;
  min-height: 300px;
  height: 85vh;
  background-color: white;
  flex-direction: row;
`;

export const Contents = styled.div`
  display: block;
  width: 90%;
  height: 100%;
  gap: 1em;
`;

export const FullWidthContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%
  gap: 20px;
`;

export const ContentBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 10px;
`;

export const RowContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`;

export const ContentBlockZeroMargin = styled.div`
  display: flex;
  justify-content: center;
`;

export const InlineBlock = styled.div`
  display: inline;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const ScrollableFlexBox = styled.div`
  display: block;
  margin: auto;
  width: 80%;
  height: 50%;
  overflow: auto;
  padding: 10px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
`;

export const GridItem = styled.div`
  display: flex;
  border: 1px solid #ddd;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LogBox = styled.div`
  display: flex;
  background-color: black;
  gap: 1em;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ccc; /* You can change the background color to your preference */
  padding: 10px;
  text-align: center;
`;
