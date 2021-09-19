import React from "react";

import { MapPin, Phone, Heart, Search } from "react-feather";
import { Link } from "react-router-dom";

import {
  HeaderBackground,
  HeaderContainer,
  IconContainer,
  SearchIconContainer,
  ActionContainer,
  ActionCenter,
  ActionRight,
  LogoContainer,
} from "./styles";

const Header = (props: { setSearchTerm: (term: string) => void }) => {
  const { setSearchTerm } = props;

  return (
    <HeaderBackground>
      <HeaderContainer>
        <LogoContainer className="clearfix">
          <Link to="/">
            <h1 className="header__logo-title">MagaNets</h1>
          </Link>
        </LogoContainer>

        <div className="header__action-container">
          <div className="header__actions-list">
            <ActionContainer>
              <IconContainer>
                <MapPin color="#eaeaea" />
              </IconContainer>
              <h3 className="action__text">Cidade: São Paulo</h3>
            </ActionContainer>
            <ActionCenter>
              <IconContainer>
                <Phone fill="#eaeaea" />
              </IconContainer>
              <h3 className="action__text">Central de atendimento</h3>
            </ActionCenter>
            <ActionRight>
              <Link to="/wishlist">
                <IconContainer>
                  <Heart fill="#eaeaea" />
                </IconContainer>
                <h3 className="action__text">Lista de desejos</h3>
              </Link>
            </ActionRight>
          </div>
          <div className="header__search-container clearfix">
            <SearchIconContainer>
              <Search color="#424242" />
            </SearchIconContainer>

            <input
              type="text"
              name="search-box"
              className="header__search-input"
              placeholder="Buscar"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </div>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Header;
