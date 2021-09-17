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
  max-width: 1898px;

  .header__logo-container {
    float: left;
    width: 28%;
    height: 88px;
  }

  .header__action-container {
    float: right;
    width: 72%;
    height: 88px;
  }

  .header__action {
    font-size: 16px;
    margin-top: 6px;
    display: inline-block;
  }

  .action--first {
    float: left;
  }

  .action--middle {
    float: left;
    margin-left: 12.5%;
  }

  .action--last {
    float: right;
  }

  .action__text {
    display: inline-block;
  }

  .header__search-container {
    clear: both;
    background: #eaeaea;
    padding: 8px 16px;
    border-radius: 8px;
    margin-top: 8px;
  }

  .header__search-input {
    border: none;
    float: left;
    min-width: 720px;
    background: none;
    color: #4d4d4d;
    font-size: 24px;
    line-height: -2px;
    outline-width: 0;
  }

  @media screen and (min-width: 1500px) {
    .action--middle {
      margin-left: 25%;
    }
  }
`;

export const IconContainer = styled.div`
  padding-right: 8px;
  display: inline-block;
`;

export const SearchIconContainer = styled.div`
  float: left;
  margin-top: 2px;
  margin-right: 16px;
`;
