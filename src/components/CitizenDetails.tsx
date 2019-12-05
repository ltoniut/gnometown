import React, { useState, FC } from "react";

interface Props {
  age: number;
  weight: number;
  height: number;
  professions: Array<string>;
}

export const CitizenDetails: FC<Props> = ({ height, weight, age, professions }) => {
  return (
    <div>
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
