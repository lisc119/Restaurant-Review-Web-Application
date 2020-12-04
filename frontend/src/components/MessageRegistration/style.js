import styled from "styled-components";

export const MainMessageRegistration = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #f2f2f2;
`;

export const ContentinerMessage = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const ContentTextRegistration = styled.div`
  height: auto;
  width: 55%;
  margin-top: 5%;
  text-align: center;
`;

export const DivRegistration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10%;
  width: 100%;
  margin-top: 2%;
`;

export const TextRegistration = styled.h1`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

export const Line = styled.div`
  border: 3px solid #e47d31;
  width: 110px;
  color: black;
`;

export const TextReg = styled.p``;

const Style = {
  MainMessageRegistration,
  ContentinerMessage,
  ContentTextRegistration,
  DivRegistration,
  TextRegistration,
  Line,
  TextReg,
};

export default Style;
