import React, { FC, useState, useEffect } from "react";
import { Subject } from "rxjs";
import { css } from "emotion";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import { Citizen } from "../domain";
import { CitizenList } from "./CitizenList";

interface Props {
  citizens: Array<Citizen>;
  inheritedDisplay: boolean;
}

export const CitizenManager: FC<Props> = ({ citizens, inheritedDisplay }) => {
  const [display, setDisplay] = useState<boolean>(inheritedDisplay);
  const [inputs$] = useState(() => new Subject());

  const [ArrowDirection, setArrowDirection] = useState<FC<SvgIconProps>>(ChevronRightIcon);

  useEffect(() => {
    setDisplay(inheritedDisplay);
    setArrowDirection(inheritedDisplay ? ChevronRightIcon : ChevronLeftIcon);
  }, [inheritedDisplay]);

  const useSlider = () => {
    setDisplay(!display);
    setArrowDirection(display ? ChevronLeftIcon : ChevronRightIcon);
  };

  return (
    <div className={styles.component}>
      <div className={styles.slider} onClick={useSlider}>
        <ArrowDirection fontSize="large" className={styles.arrow} />
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
  component: css`
    float: right;
    height: 100%;
    display: flex;
    background-color: #795548;
    position: relative;
    box-shadow: -7px 0 24px -7px rgba(0,0,0,0.34);
  `,
  manager: css`
    height: 100%;
    width: 15rem;
    display: flex;
    flex-direction: column;
  `,
  slider: css`
    display: flex;
    position: absolute;
    top: calc(50% - 1rem);
    left: calc(-2.2rem - 10px);
    vertical-align: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 2.2rem;
    background-color: #222;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 7px 24px -7px rgba(0,0,0,0.34);
  `,
  filterContainer: css`
    padding: 4%;
    height: 5%;
  `,
  filterInput: css`
    font-size: 1rem;
    margin-top: 4%;
  `,
  arrow: css`
    color: white;
  `,
};
