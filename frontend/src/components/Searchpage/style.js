import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  height: 820px;
  background: #f2f2f2;
`;

export const RestaurantsListing = styled.div`
display: grid
grid-template-columns: repeat(4, 1fr);
grid-gap: 30px;
`;

export const HorizontalLine = styled.hr`
  border: 1px solid #d8d8d8;
  background: #d8d8d8;
  width: 630px;
  margin-top: 15px;
`;

export const TtitleContent = styled.div`
  display: flex;
  margin-top: 20px;
  height: 54px;
  align-items: center;
  margin-left: 405px;
`;

export const LinkPages = styled.a`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #4c4c4c;
  margin-left: 80px;

  &:hover {
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 3px solid #e47d31;
  }
`;
