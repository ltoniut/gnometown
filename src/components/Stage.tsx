import { css } from "emotion";
import React, { FC } from "react";
import { Town } from "../interfaces";
import { CitizenManager } from "./CitizenManager";
import NameDisplay from "./NameDisplay";

interface Props {
  town: Town;
}

export const Stage: FC<Props> = ({ town }) => (
  <div className={styles.component}>
    <NameDisplay title={town.name} />
    <CitizenManager citizens={town.citizens} />
  </div>
);

const styles = {
  component: css`
    width: 80%;
    height: 90%;
    margin-top: 5%;
    background-image: url("http://www.juegomania.org/Heimdall+2/foto/pc/6/6920/498842.jpg/Foto+Heimdall+2.jpg");
    background-size: 100% 100%;
    margin-left: auto;
    margin-right: auto;
  `,
};
