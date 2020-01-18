import { css } from "emotion";
import React, { FC } from "react";

interface Props {
  age: number;
  weight: number;
  height: number;
  professions: Array<string>;
  hair_color: string;
  friends: Array<string>;
}

export const CitizenDetails: FC<Props> = ({
  height,
  weight,
  hair_color,
  age,
  professions,
  friends,
}) => (
  <div className={styles.component}>
    <div className={styles.line}>Age: {age}</div>
    <div className={styles.line}>Height: {parseFloat(`${height}`).toFixed(2)} cm</div>
    <div className={styles.line}>Weight: {parseFloat(`${weight}`).toFixed(2)} kg</div>
    <div className={styles.line} style={{ color: hair_color }}>Hair color: {hair_color}</div>
    <div className={styles.line}>
      <div className={styles.line}>Jobs:</div>
      <ul>
        {professions.map(p => (
          <li className={styles.line} key={p}>{p}</li>
        ))}
      </ul>
    </div>
    <div className={styles.line}>
    <div className={styles.line}>Friends:</div>
      <ul>
        {friends.map(f => (
          <li className={styles.line} key={f}>{f}</li>
        ))}
      </ul>
    </div>
  </div>
);

const styles = {
  component: css`
    margin: 5%;
    padding: 3%;
    text-align: left;
  `,
  line: css`
    margin-bottom: 3px;
  `,
};
