import React, { FC, useState } from "react";
import { Subject } from "rxjs";
import { Citizen } from "../interfaces";
import { CitizenList } from "./CitizenList";
import { css } from "emotion";

const Sources = require("../sources.json");

interface Props {
  citizens: Array<Citizen>;
}

export const CitizenManager: FC<Props> = ({ citizens }) => {
  const [display, setDisplay] = useState<boolean>(true);
  const [inputs$] = useState(() => new Subject());

  function hideComponent() {
    setDisplay(false);
  }

  const rightArrow: string = "assets/" + Sources.rightArrowAsset;

  return (
    <div className={styles.bar}>
      <div className={styles.arrow} onClick={() => setDisplay(!display)}>
        <img src={rightArrow} />
      </div>
      {display && (
        <div className={styles.manager}>
          <div className={styles.filter}>
            Filter Citizens:
            <br />
            <input type="text" onChange={e => inputs$.next(e.target.value)} />
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
    background-color: brown;
  `,
  manager: css`
    float: right;
    height: 100%;
    width: 30vh;
  `,
  arrow: css`
    background-image: url("https://previews.123rf.com/images/eglazunoff/eglazunoff1811/eglazunoff181100189/112852645-paper-texture-background-crumpled-paper-texture-background-paper-textures-.jpg");
    float: left;
    width: 3.5vh;
    height: 100%;
  `,
  filter: css`
    padding-top: 2%;
    height: 7%;
  `,
};
