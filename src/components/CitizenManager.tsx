import React, { FC, useState, useEffect } from "react";
import { Subject } from "rxjs";
import { Citizen } from "../domain";
import { CitizenList } from "./CitizenList";
import { css } from "emotion";

const assets = require("../assets.json");

interface Props {
  citizens: Array<Citizen>;
  inheritedDisplay: boolean;
}

export const CitizenManager: FC<Props> = ({ citizens, inheritedDisplay }) => {
  const [display, setDisplay] = useState<boolean>(inheritedDisplay);
  const [inputs$] = useState(() => new Subject());

  const rightArrow: string = assets.rightArrow;
  const leftArrow: string = assets.leftArrow;

  const [arrowDirection, setArrowDirection] = useState<string>(rightArrow);

  useEffect(() => {
    setDisplay(inheritedDisplay);
    setArrowDirection(inheritedDisplay ? rightArrow : leftArrow);
  }, [inheritedDisplay]);

  const useSlider = () => {
    setDisplay(!display);
    setArrowDirection(display ? leftArrow : rightArrow);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.slider} onClick={useSlider}>
        <img className={styles.arrow} src={arrowDirection} />
      </div>
      {display && (
        <div className={styles.manager}>
          <div className={styles.filterContainer}>
            <input
              placeholder="Filter Citizens"
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
    background-color: #795548;
  `,
  manager: css`
    float: right;
    height: 100%;
    width: 27vh;
  `,
  arrow: css`
    margin: auto;
    max-height: 2.2rem;
  `,
  slider: css`
    background-color: #a5412a;
    float: left;
    display: flex;
    vertical-align: center;
    width: 4.5vh;
    height: 100%;
  `,
  filterContainer: css`
    padding: 4%;
    height: 5%;
  `,
  filterInput: css`
    margin-top: 4%;
  `,
};
