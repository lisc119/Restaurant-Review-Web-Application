import styled from "styled-components";

export const MainContainer = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-left: 1%;
  height: 100%;
  width: auto;
`;

export const SinUpButton = styled.button`
  background: #e47d31;
  height: 41px;
  width: 90px;
  color: white;
  margin-right: 1px;
  border: none;
  border-radius: 20px 0px 0px 20px;
  outline: none;
  cursor: pointer;
`;

export const SinInButton = styled.button`
  background: #e47d31;
  height: 41px;
  width: 90px;
  color: white;
  border-radius: 0px 20px 20px 0px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SinOutButton = styled.button`
  background: #e47d31;
  height: 41px;
  width: 90px;
  color: white;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ContainerLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 35%;
  margin-left: 50%;
`;

export const LinkPages = styled.p`
  color: black;
  font-size: 20px;
  font-weight: normal;
  &:hover {
    border-bottom: 3px solid #e47d31;
    font-weight: bold;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 14%;
`;

export const ContainerButtonLoginSignup = styled.div`
  height: 100%;
  width: 2%;
`;

export const LogoLuna = styled.img``;
