import React, { useState } from "react";
import { NameDisplay } from "./NameDisplay";
import { CitizenManager } from "./CitizenManager";
import { CitizenData } from "../interfaces";
import { css } from "emotion";

export const Stage = props => {
  const nameData = Object.keys(props.townData)[0];
  const citizenData: Array<CitizenData> =
    props.townData[Object.keys(props.townData)[0]];
  const [townName] = useState<string>(nameData);
  const [townData] = useState<Array<CitizenData>>(citizenData);

  return <div className={styles.component}>
      <NameDisplay title={townName} />
      <CitizenManager data={townData} />
    </div>
};

const styles = {
  component: css`
    width: 80%;
    height: 90%;
    margin-top: 5%;
    background-image: url("http://www.juegomania.org/Heimdall+2/foto/pc/6/6920/498842.jpg/Foto+Heimdall+2.jpg");
    background-size: 100% 100%;
    margin-left: auto;
    margin-right: auto;
  `
};
