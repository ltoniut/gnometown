import { css } from "emotion";
import React, { FC, useState } from "react";
import { Citizen } from "../interfaces";
import { CitizenDetails } from "./CitizenDetails";

interface Props extends Citizen {}

export const CitizenDisplay: FC<Props> = ({ name, thumbnail, ...props }) => {
  // REVIEW No need for state, you have props already.
  // const [name] = useState<string>(data.name);
  // const [image] = useState<string>(data.thumbnail);
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div
      className={styles.component}
      onClick={() => {
        return setDisplay(!display);
      }}
    >
      <img className={styles.thumbnail} src={thumbnail}></img>
      <div>{name}</div>
      {display && <CitizenDetails {...props} />}
    </div>
  );
};

const styles = {
  component: css`
    padding-bottom: 3%;
    padding-top: 3%;
    text-align: center;
    border: 2px;
    border-color: #9a861a;
    border-style: solid;
    border-radius: 10px;
    margin-left: 2%;
    margin-right: 2%;
  `,
  thumbnail: css`
    max-height: 100px;
    max-width: 150px;
  `,
};
