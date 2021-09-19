import styled from "styled-components";

export const HeaderBackground = styled.div`
  border-top: solid 8px #371052;
  border-bottom: solid 2px #4d4d4d;
  background-color: #5a2d82;
  height: 162px;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 34px 40px;
  max-width: 1840px;

  .header__action-container {
    display: inline-block;
    width: 71%;
    height: 88px;
  }

  .header__action {
    font-size: 16px;
    display: inline-block;
  }

  .action__text {
    display: inline-block;
  }

  .header__search-container {
    background: #eaeaea;
    padding: 8px 16px;
    border-radius: 8px;
    margin-top: 8px;
  }

  .header__search-input {
    border: none;
    width: 90%;
    background: none;
    color: #4d4d4d;
    font-size: 24px;
    line-height: -2px;
    outline-width: 0;
  }
`;

export const LogoContainer = styled.div`
  display: inline-block;
  width: 26%;
  height: 74px;

  a {
    text-decoration: none;
    float: left;
  }
`;

export const ActionContainer = styled.p`
  display: inline-block;
  width: 30%;
  margin-top: 6px;
`;

export const ActionCenter = styled.p`
  display: inline-block;
  text-align: center;
  margin-top: 6px;
  min-width: 230px;
  width: 42.18%;
`;

export const ActionRight = styled.p`
  display: inline-block;
  width: 27%;
  text-align: right;
  margin-top: 6px;
`;

export const IconContainer = styled.div`
  padding-right: 8px;
  display: inline-block;
`;

export const SearchIconContainer = styled.div`
  display: inline-block;
  margin-top: 2px;
  margin-right: 16px;
`;
