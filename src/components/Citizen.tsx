import { css } from "emotion";
import React, { FC, useState } from "react";
import { CitizenData } from "../interfaces";
import { CitizenDetails } from "./CitizenDetails";

interface Props extends CitizenData {}

export const Citizen: FC<Props> = ({ name, thumbnail, ...props }) => {
  // REVIEW No need for state, you have props already.
  // const [name] = useState<string>(data.name);
  // const [image] = useState<string>(data.thumbnail);
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div className={styles.component} onClick={() => setDisplay(!display)}>
      <img className={styles.thumbnail} src={thumbnail}></img>
      <div>{name}</div>
      {display && <CitizenDetails {...props} />}
    </div>
  );
};

const styles = {
  component: css`
    padding-bottom: 7px;
    text-align: left;
    border: 1px;
    border-color: black;
    border-style: solid;
  `,
  thumbnail: css`
    max-height: 100px;
    max-width: 150px;
  `
};
