import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, isFooter = false, classNames) =>
  function HOC() {
    return (
      <div className={`app__container ${classNames}`} id={idName}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          {isFooter &&
          (
            <div className="copyright">
              <p className="p-text">@2020 VUOTNH</p>
              <p className="p-text">All right reserved</p>
            </div>
          )}
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
