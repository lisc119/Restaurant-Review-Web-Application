import styled from "styled-components";

export const ReviewsContainer = styled.div`
  height: 720px;
  display: grid
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

export const BodyContainer = styled.div`
  width: 100%;
  background: #f2f2f2;
`;

export const HorizontalLine = styled.hr`
  border: 1px solid #d8d8d8;
  background: #d8d8d8;
  width: 630px;
  pargin-top: 15px;
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

export const TtitleContent = styled.div`
  display: flex;
  margin-top: 20px;
  height: 54px;
  align-items: center;
  margin-left: 405px;
`;

export const ReviewCardWrapper = styled.div`
  height: 410px;
  width: 270px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
  margin-left: 134px;
  margin-top: 57px;
`;

export const TopContainer = styled.div`
  border-top: 8px solid #e47d31;
  height: 66px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: flex-start;

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 23px;
    color: #e47d31;
    margin-top: 10px;
    border: 1px solid red;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #4c4c4c;
    margin-top: 38px;
    border: 1px solid black;
  }
`;

export const Image = styled.div`
  width: 65px;
  height: 65px;
  border: 1px solid #ebebeb;
`;

export const ReviewContent = styled.div`
  display: block;
  margin-left: 10px;

  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #e47d31;
    margin-top: 14px;
    margin-bottom: 8px;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #4c4c4c;
  }
`;

export const LikeCommentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLike = styled.button`
  border: none;
  border-radius: 20px 0px 0px 20px;
  background: rgba(145, 145, 145, 0.6);
  color: white;
  height: 33px;
  width: 124px;
`;

export const ButtonComment = styled.button`
  border-radius: 0px 20px 20px 0px;
  border: none;
  background: rgba(145, 145, 145, 0.6);
  color: white;
  height: 33px;
  width: 124px;
`;

export const CommentsArea = styled.div`
  display: block;
  margin-left: 10px;

  h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }

  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #e47d31;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
`;
