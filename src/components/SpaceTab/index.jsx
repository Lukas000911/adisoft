import React, { useState } from "react";
import classes from "./index.module.css";
import cx from "classnames";

import { SPACETAB_OPTIONS } from "../../constants/spaceTabOptions";
import SpaceInfoCard from "../SpaceInfoCard";

const SpaceTab = () => {
  const [selectedSpace, setSelectedSpace] = useState(
    SPACETAB_OPTIONS.find(({ id }) => id === 1)
  );
  console.log(selectedSpace);
  return (
    <div className="p-[80px]">
      <h4 className={classes.titleText}>Nordspace erdvės</h4>
      <div className="flex mt-[32px] gap-[24px]">
        <div className={classes.spaceTabSelectionHolder}>
          {SPACETAB_OPTIONS.map(({ place, id }) => (
            <div
              key={id}
              className={cx(classes.spaceTabOption, {
                [classes.selectedSpace]: id === selectedSpace.id,
              })}
              onClick={() =>
                setSelectedSpace(
                  SPACETAB_OPTIONS.find((space) => space.id === id)
                )
              }
            >
              {place}
            </div>
          ))}
        </div>
        <div className={classes.mapHolder}>
          <SpaceInfoCard space={selectedSpace} />
        </div>
      </div>
    </div>
  );
};

export default SpaceTab;
