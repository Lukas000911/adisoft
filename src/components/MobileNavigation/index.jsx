import React from "react";
import { useRef } from "react";
import classes from "./index.module.css";
import cx from "classnames";

import { MENU_OPTIONS } from "../../constants/menuOptions";

const MobileNavigation = () => {
  const navRef = useRef(null);
  const expandMenu = () => {
    navRef.current.classList.contains(classes.navExpanded)
      ? navRef.current.classList.remove(classes.navExpanded)
      : navRef.current.classList.add(classes.navExpanded);
  };
  return (
    <div
      className={cx(classes.mobileNav, "flex flex-col items-center")}
      ref={navRef}
    >
      <div className="pt-4 flex justify-around w-full" onClick={expandMenu}>
        <img
          src="./icons/bars-solid.svg"
          alt="menu burger"
          height={40}
          width={40}
        />
        <img
          src="./logos/Nordspace_logo.png"
          height={26}
          width={200}
          alt="nordspace logo"
        />
      </div>
      <div className="flex flex-col gap-[16px] mt-4 pb-4">
        {MENU_OPTIONS.map((option, index) => (
          <div key={`${option}_${index}`} className={classes.navText}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
