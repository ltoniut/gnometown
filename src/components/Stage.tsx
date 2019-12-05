import { css } from "emotion";
import React, { FC, useState } from "react";
import { Town } from "../interfaces";
import { CitizenManager } from "./CitizenManager";
import { NameDisplay } from "./NameDisplay";

const assets = require("../assets.json");

interface Props {
  town: Town;
}

export const Stage: FC<Props> = ({ town }) => {
  return (
    <div className={styles.component}>
      <NameDisplay title={town.name} />
      <CitizenManager citizens={town.citizens} />
    </div>
  );
};
// Reducer

const styles = {
  component: css`
    width: 80%;
    height: 90%;
    margin-top: 5%;
    background-image: url("/assets/stage-background.jpg");
    background-size: 100% 100%;
    margin-left: auto;
    margin-right: auto;
  `,
};
