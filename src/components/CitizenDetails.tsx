import React, { useState, FC } from "react";
import { css } from "emotion";

interface Props {
  age: number;
  weight: number;
  height: number;
  professions: Array<string>;
}

export const CitizenDetails: FC<Props> = ({ height, weight, age, professions }) => {
  return (
    <div className={styles.component}>
      <div>Height: {height}</div>
      <div>Weight: {weight}</div>
      <div>
        Jobs:
        <ul>
          {professions.map((profession: string) => (
            <li key={profession}>{profession}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  component: css`
    margin: 5%;
    padding: 3%;
    text-align: left;
    border: 1px;
    border-color: black;
    border-style: solid;
    background-color: yellow;
  `,
};
