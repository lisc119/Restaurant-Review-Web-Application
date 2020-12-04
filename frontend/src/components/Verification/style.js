import styled from "styled-components";

const MainVerification = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #f2f2f2;
`;

const ContainerVerificationForm = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
`;

const ContentForm = styled.section`
  display: flex;
  margin-top: 5%;
  height: 40%;
  width: 100%;
`;
const ContentFormLeftSide = styled.section`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 49%;
  margin-right: 1%;
`;

const ContainerInputFieldsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: auto;
`;

const ContainerInputFieldsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: auto;
`;

const ContentFormRightSide = styled.section`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 49%;
  margin-left: 1%;
`;

const DivVerificationText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10%;
  width: 100%;
  margin-top: 2%;
`;
const TextVerification = styled.h1`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

const Line = styled.div`
  border: 3px solid #e47d31;
  width: 110px;
  color: black;
`;

const InputEmailVerification = styled.input`
  width: 330px;
  height: 45px;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const InputUserNameVerification = styled.input`
  width: 330px;
  height: 45px;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const InputUsernameVerification = styled.input`
  width: 330px;
  height: 45px;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const InputVerificationCode = styled.input`
  width: 330px;
  height: 45px;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const InputLocationVerification = styled.input`
  width: 330px;
  height: 45px;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const InputPswRepeatVerification = styled.input`
  width: 330px;
  height: 45px;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ContentButtonFinishVerification = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  height: 10%;
  width: 100%;
`;

const ButtonVerificationFinish = styled.button`
  width: 259px;
  height: 56px;
  border-radius: 28px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: white;
  background: #e47d31;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Style = {
  MainVerification,
  DivVerificationText,
  TextVerification,
  Line,
  ContainerVerificationForm,
  ContentForm,
  ContentFormLeftSide,
  ContentFormRightSide,
  InputEmailVerification,
  InputUserNameVerification,
  InputUsernameVerification,
  ContainerInputFieldsLeft,
  InputVerificationCode,
  InputLocationVerification,
  InputPswRepeatVerification,
  ContainerInputFieldsRight,
  ContentButtonFinishVerification,
  ButtonVerificationFinish,
};

export default Style;
