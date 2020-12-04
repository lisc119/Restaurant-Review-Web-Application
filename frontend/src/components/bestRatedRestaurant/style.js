import styled from "styled-components";

export const BodyContainer = styled.div`
  height: 639px;
  background: #f2f2f2;
`;

export const RestaurantsListing = styled.div`
margin-top: 70px;
display: grid
grid-template-columns: repeat(4, 1fr);
grid-gap: 30px;
border: 1px solid red;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #4c4c4c;
  margin-top: 30px;
`;

export const HorizontalLine = styled.hr`
  border: 3px solid #e47d31;
  background: #e47d31;
  width: 265px;
`;
