import React from "react";
import classes from "./index.module.css";
import cx from "classnames";

const SpaceInfoCard = ({ space }) => {
  return (
    <div className={classes.infoCardHolder}>
      <img height={306} width={413} src="./images/info_card_img.png" />
      <div className="px-[24px]">
        <div className="flex gap-[8px] mt-[22px] items-center">
          <img height={16} width={16} src="./icons/location.png" />
          <p className={classes.placeText}>{space.address}</p>
        </div>
        <p className={classes.occupationText}>
          Laisvos saugyklos: {space.occupied}
        </p>
        <div className="relative mt-[21px]">
          <button className={classes.infoButton}>Daugiau informacijos</button>
          <img
            src="./icons/chevron_right.png"
            height={24}
            width={24}
            className={classes.expandIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceInfoCard;