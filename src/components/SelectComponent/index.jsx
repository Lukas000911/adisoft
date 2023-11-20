import React from "react";
import classes from "./index.module.css";
import cx from "classnames";

import { SELECT_OPTIONS } from "../../constants/searchBlockOptions";

const SelectComponent = () => {
  return (
    <div className="relative mt-[16px] mb-[48px]">
      <select
        name="nordSpace_objects"
        id="nordSpace_objects"
        className={classes.nordSpaceSelect}
      >
        {SELECT_OPTIONS.map((option, index) => (
          <option value={option} key={`${option}_${index}`}>
            {option}
          </option>
        ))}
      </select>
      <img
        src="./icons/chevron_down.png"
        height={24}
        width={24}
        className={classes.selectChevron}
      />
    </div>
  );
};

export default SelectComponent;
