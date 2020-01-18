import { css } from 'emotion';
import React, { FC } from 'react';
import { Town } from '../domain';
import { CitizenManager } from './CitizenManager';
import { NameDisplay } from './NameDisplay';

interface Props {
  town: Town;
}
export const Stage: FC<Props> = ({ town }) => {
  if (!town.name) {
    throw new Error('Town must have a name');
  }

  return (
    <div className={styles.component}>
      <div className={styles.stage}>
        <NameDisplay title={town.name} />
        <CitizenManager citizens={town.citizens} inheritedDisplay={false} />
      </div>
    </div>
  );
};

const styles = {
  component: css`
    width: 80%;
    height: 90%;
    margin-top: 5%;
    background-color: #e0e0e0;
    background-size: 100% 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    border-radius: 0.5rem;
  `,
  stage: css`
    background-image: url('/assets/stage-background.jpg');
    background-size: cover;
    height: 100%;
    width: 100%;
    border: 2px black solid;
  `,
};
