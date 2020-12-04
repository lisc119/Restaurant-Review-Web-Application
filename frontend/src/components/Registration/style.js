import styled from "styled-components";

export const TextRegistration = styled.h1`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

export const ButtonRegistration = styled.button`
  height: 56px;
  width: 190px;
  border-radius: 28px;
  background-color: #e47d31;
  outline: none;
  border: transparent;
  cursor: pointer;
`;

export const TextRegistrationButton = styled.div`
  font-size: 20px;
  color: white;
`;

export const InputEmailRegistration = styled.input`
  width: 380px;
  height: 45px;
  margin-top: 3%;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const MainContainerRegistration = styled.section`
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  height: 80vh;
  width: 100%;
`;

export const ContainerRegistrationForm = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
`;
export const RegistrationMessage = styled.section`
  position: absolute;
  text-align: center;
  margin-left: 17%;
  background-color: #f2f2f2;
  margin-top: 9%;
  height: 30%;
  width: 33%;
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

export const Line = styled.div`
  border: 3px solid #e47d31;
  width: 110px;
  color: black;
`;

export const DivEmailAddress = styled.div`
  display: flex;
  justify-content: center;
  height: 15%;
  width: 100%;
  margin-top: 1.5%;
`;

export const DivButtonRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  margin-top: 1.5%;
`;

const Style = {
  TextRegistration,
  ButtonRegistration,
  TextRegistrationButton,
  InputEmailRegistration,
  MainContainerRegistration,
  ContainerRegistrationForm,
  DivRegistration,
  DivEmailAddress,
  DivButtonRegister,
  Line,
  RegistrationMessage,
};

export default Style;
