import styled from "styled-components";

export const MainContainerFormNewRestaurant = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: #f2f2f2;
`;

export const DivCreateNewRestaurantText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10%;
  width: 100%;
  margin-top: 2%;
`;

export const TextCreateNewRestaurant = styled.h1`
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

export const ContainerFormCreateNewRestaurant = styled.section`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
`;

export const ContainerFormLeftSide = styled.div`
  display: flex;
  justify-content: flex-end;
  height: auto;
  width: 25%;
`;

export const ContainerFormCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 25%;
`;

export const ContainerFormRight = styled.div`
  display: flex;
  height: auto;
  width: 25%;
`;

export const FormLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  width: auto;
  margin-right: 15%;
`;

export const FormCenter = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  width: auto;
  margin-right: 15%;
`;

export const FormRightSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  width: auto;
`;

export const InputFieldName = styled.input`
  border: 1px solid #ebebeb;
  margin-top: 3%;
  width: 350px;
  height: 40px;
  outline: none;
  border-radius: 3px;
`;

export const InputFieldAddress = styled.input`
  border: 1px solid #ebebeb;
  margin-top: 3%;
  width: 350px;
  height: 40px;
  outline: none;
  border-radius: 3px;
`;

export const InputFieldContact = styled.input`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  margin-top: 3%;
`;

export const InputFieldDetails = styled.input`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  margin-top: 3%;
`;

export const InputFieldCategory = styled.input`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  outline: none;
  border-radius: 3px;
  margin-top: 3%;
`;

export const InputFieldCity = styled.input`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  margin-top: 3%;
`;
export const InputZip = styled.input`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  margin-top: 3%;
`;

export const InputFieldPhone = styled.input`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  margin-top: 3%;
`;

export const InputFieldEmail = styled.input`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  margin-top: 3%;
`;

export const InputFieldPriceLevel = styled.select`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  margin-top: 3%;
`;

export const LevelPrice = styled.option`
  border: 1px solid #ebebeb;
  margin-top: 3%;
`;

export const InputFieldCounty = styled.select`
  border: 1px solid #ebebeb;
  width: 350px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  margin-top: 3%;
`;

export const City = styled.option``;

export const RestaurantImage = styled.input`
  margin-top: 6%;
`;

export const LabelName = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelStreet = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelWebsite = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelOpeningHours = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelCategory = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelCity = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelPhone = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelPriceLevel = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelCountry = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelZip = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelEmail = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const LabelImage = styled.label`
  margin-top: 20%;
  color: #979797;
`;

export const ContainerButtonSearch = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  margin-bottom: 10%;
  height: 10%;
  width: 75%;
`;

export const ButtonSerch = styled.button`
  width: 200px;
  height: 57px;
  border-radius: 28px;
  background: #e47d31;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`;

const Style = {
  MainContainerFormNewRestaurant,
  DivCreateNewRestaurantText,
  TextCreateNewRestaurant,
  Line,
  ContainerFormCreateNewRestaurant,
  ContainerFormLeftSide,
  ContainerFormCenter,
  ContainerFormRight,
  FormLeftSide,
  FormCenter,
  FormRightSide,
  InputFieldName,
  InputFieldAddress,
  InputFieldContact,
  InputFieldDetails,
  InputFieldCategory,
  InputFieldCity,
  InputFieldPhone,
  InputFieldPriceLevel,
  LevelPrice,
  InputFieldCounty,
  City,
  RestaurantImage,
  LabelName,
  LabelStreet,
  LabelWebsite,
  LabelOpeningHours,
  LabelCategory,
  LabelCity,
  LabelPhone,
  LabelPriceLevel,
  LabelCountry,
  LabelZip,
  LabelEmail,
  LabelImage,
  InputZip,
  ContainerButtonSearch,
  ButtonSerch,
  InputFieldEmail,
};

export default Style;
