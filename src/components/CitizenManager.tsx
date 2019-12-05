import React, { FC, useState } from "react";
import { Subject } from "rxjs";
import { Citizen } from "../interfaces";
import { CitizenList } from "./CitizenList";
import { css } from "emotion";

const assets = require("../assets.json");

interface Props {
  citizens: Array<Citizen>;
}

export const CitizenManager: FC<Props> = ({ citizens }) => {
  const [display, setDisplay] = useState<boolean>(true);
  const [inputs$] = useState(() => new Subject());

  const rightArrow: string = assets.rightArrow;
  const leftArrow: string = assets.leftArrow;

  const [arrowDirection, setArrowDirection] = useState<string>(rightArrow);

  const useSlider = () => {
    setDisplay(!display);
    setArrowDirection(arrowDirection == leftArrow ? rightArrow : leftArrow);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.slider} onClick={useSlider}>
        <img className={styles.arrow} src={arrowDirection} />
      </div>
      {display && (
        <div className={styles.manager}>
          <div className={styles.filterContainer}>
            Filter Citizens:
            <br />
            <input
              className={styles.filterInput}
              type="text"
              onChange={e => inputs$.next(e.target.value)}
            />
          </div>
          <CitizenList citizens={citizens} inputs$={inputs$ as Subject<string>} />
        </div>
      )}
    </div>
  );
};

const styles = {
  bar: css`
    float: right;
    height: 100%;
    background-image: url("/assets/manager-background.jpg");
  `,
  manager: css`
    float: right;
    margin-right: 3vh;
    height: 100%;
    width: 27vh;
  `,
  arrow: css`
    margin: auto;
    vertical-align: center;
    max-height: 3vh;
  `,
  slider: css`
    background-color: #a5412a;
    float: left;
    vertical-align: center;
    width: 4.5vh;
    height: 100%;
  `,
  filterContainer: css`
    padding: 4%;
    height: 7%;
  `,
  filterInput: css`
    margin-top: 4%;
  `,
};
