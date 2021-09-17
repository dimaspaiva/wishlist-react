import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container clearfix">
        <div className="header__logo-container">
          <h1 className="header__logo-title">MagaNets</h1>
        </div>

        <div className="header__action-container">
          <div className="header__actions-list clearfix">
            <div className="header__action action--first">
              <img
                src="./icons/map-pin.svg"
                alt="icon"
                className="action__icon"
              />
              <h3 className="action__text">Cidade: São Paulo</h3>
            </div>
            <div className="header__action action--middle">
              <img
                src="./icons/phone.svg"
                alt="icon"
                className="action__icon"
              />
              <h3 className="action__text">Central de atendimento</h3>
            </div>
            <div className="header__action action--last">
              <img
                src="./icons/heart.svg"
                alt="icon"
                className="action__icon"
              />
              <h3 className="action__text">Lista de desejos</h3>
            </div>
          </div>
          <div className="header__search-container clearfix">
            <img
              className="header__search-icon"
              alt="icon"
              src="./icons/search.svg"
            />
            <input
              type="text"
              name="search-box"
              className="header__search-input"
              placeholder="Buscar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
