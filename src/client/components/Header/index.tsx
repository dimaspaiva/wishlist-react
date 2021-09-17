import React from "react";

import { MapPin, Phone, Heart, Search } from "react-feather";
import { Link } from "react-router-dom";

import {
  HeaderBackground,
  HeaderContainer,
  IconContainer,
  SearchIconContainer,
} from "./styles";

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderContainer className="clearfix">
        <Link to="/">
          <div className="header__logo-container">
            <h1 className="header__logo-title">MagaNets</h1>
          </div>
        </Link>

        <div className="header__action-container">
          <div className="header__actions-list clearfix">
            <div className="header__action action--first">
              <IconContainer>
                <MapPin color="#eaeaea" />
              </IconContainer>
              <h3 className="action__text">Cidade: São Paulo</h3>
            </div>
            <div className="header__action action--middle">
              <IconContainer>
                <Phone fill="#eaeaea" />
              </IconContainer>
              <h3 className="action__text">Central de atendimento</h3>
            </div>
            <Link to="/wishlist">
              <div className="header__action action--last">
                <IconContainer>
                  <Heart fill="#eaeaea" />
                </IconContainer>
                <h3 className="action__text">Lista de desejos</h3>
              </div>
            </Link>
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
            />
          </div>
        </div>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Header;
