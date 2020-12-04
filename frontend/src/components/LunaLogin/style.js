import styled from "styled-components";

const ContainerLogin = styled.section`
  width: 100%;
  height: 80vh;
  justify-content: center;
  background-color: #f2f2f2;
`;

const ContentLoginForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  width: 100%;
`;

const ContentWriteLogin = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const TextLogin = styled.p`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 24px;
`;
const Line = styled.div`
  border: 3px solid #e47d31;
  width: 110px;
`;

const ContainerInput = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
`;

const InputUserNameLogin = styled.input`
  width: 380px;
  height: 45px;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const InputPasswordLogin = styled.input`
  width: 380px;
  height: 45px;
  margin-top: 1%;
  border: 1px solid #ebebeb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ButtonLogin = styled.button`
  height: 56px;
  width: 190px;
  border-radius: 28px;
  background-color: #e47d31;
  outline: none;
  border: transparent;
  cursor: pointer;
  &:hover {
  }
`;

const TextLoginButton = styled.div`
  font-size: 20px;
  color: white;
`;

const ContainerButtonLogin = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
  width: 40%;
`;

const Style = {
  ButtonLogin,
  ContainerLogin,
  ContentLoginForm,
  ContentWriteLogin,
  TextLogin,
  Line,
  ContainerInput,
  InputUserNameLogin,
  InputPasswordLogin,
  TextLoginButton,
  ContainerButtonLogin,
};

export default Style;
