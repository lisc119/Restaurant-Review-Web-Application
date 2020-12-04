import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  height: 50px;
  display: inline-flex;
`;

export const Input = styled.input`
  height: 48px;
  width: 80%;
  border: 1px solid #d8d8d8;
  height: 50px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  justify-content: center;
  color: #d8d8d8;
  padding-left: 30px;
`;

export const Button = styled.button`
  width: 300px;
  height: 54px;
  border: 1px solid #d8d8d8;
  background: #ffffff;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #d8d8d8;
  }
`;
