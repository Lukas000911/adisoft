import React from "react";
import classes from "./index.module.css";
import cx from "classnames";

import { MENU_OPTIONS } from "../../constants/menuOptions";

const Navigation = () => {
  return (
    <div className={cx(classes.navBar, "flex justify-between")}>
      <img src="./logos/Nordspace_logo.png" height={26} width={200} />
      <div className="flex gap-[48px]">
        {MENU_OPTIONS.map((option, index) => (
          <div key={`${option}_${index}`} className={classes.navText}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
