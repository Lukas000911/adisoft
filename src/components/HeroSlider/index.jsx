import React, { useState } from "react";
import classes from "./index.module.css";
import cx from "classnames";

import { SPACE_OPTIONS } from "../../constants/searchBlockOptions";
import SelectComponent from "../SelectComponent";
import SearchButton from "../SearchButton";

const HeroSlider = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={classes.imageContainer}>
      <div
        className={cx(
          classes.gradientOverlay,
          "flex items-center lg:justify-between lg:gap-[30px] gap-[20px]"
        )}
      >
        <p className={classes.heroText}>
          Išmanios ervdės tavo hobiui ar verslui
        </p>
        <div className={classes.searchBlock}>
          <p className={classes.searchBlockText}>Objektas</p>
          <SelectComponent />
          <p className={classes.searchBlockText}>Erdvės plotas, m²</p>
          <div className="flex gap-[8px] mt-[16px]">
            {SPACE_OPTIONS.map((option, index) => (
              <div
                key={`${option}_${index}`}
                className={cx(classes.spaceOptions, {
                  [classes.selectedOption]: index === selectedOption,
                })}
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </div>
            ))}
          </div>
          <SearchButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
