import { css } from 'emotion';
import React, { FC, useState } from 'react';
import { Citizen } from '../domain';
import { CitizenDetails } from './CitizenDetails';

interface Props extends Citizen {}

export const CitizenDisplay: FC<Props> = ({ name, thumbnail, ...props }) => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div
      className={styles.component}
    >
      <div onClick={() => setDisplay(!display)}>
        <img className={styles.thumbnail} src={thumbnail}></img>
        <div className={styles.name}>{name}</div>
      </div>
      {display && <CitizenDetails {...props} />}
    </div>
  );
};

const styles = {
  component: css`
    background-color: #222;
    color: white;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 5px;
    box-shadow: 5px 7px 24px -7px rgba(0,0,0,0.34);
  `,
  thumbnail: css`
    height: 120px;
    width: 100%;
    object-fit: cover;
  `,
  name: css`
    padding-left: 15px;
    padding-right: 15px;
  `,
};
