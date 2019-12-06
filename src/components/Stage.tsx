import { css } from "emotion";
import React, { FC, useReducer } from "react";
import { Action } from "redux";
import { Town } from "../domain";
import { CitizenManager } from "./CitizenManager";
import { NameDisplay } from "./NameDisplay";

interface Props {
  town: Town;
}

const hoverReducer = (state: boolean, action: Action) => {
  switch (action.type) {
    case "SHOW_MANAGER":
      return false;
    case "HIDE_MANAGER":
      return true;
    default:
      throw new Error();
  }
};

export const Stage: FC<Props> = ({ town }) => {
  if (!town.name) {
    throw new Error("Town must have a name");
  }
  const [hover, dispatch] = useReducer<(state: boolean, action: Action) => boolean>(
    hoverReducer,
    true,
  );

  const handleMouseEnter = () => {
    dispatch({ type: "HIDE_MANAGER" });
  };
  const handleMouseLeave = () => {
    dispatch({ type: "SHOW_MANAGER" });
  };

  return (
    <div className={styles.component}>
      <div className={styles.stage} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NameDisplay title={town.name} />
        <CitizenManager citizens={town.citizens} inheritedDisplay={!hover} />
      </div>
    </div>
  );
};

// Reducer

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
    background-image: url("/assets/stage-background.jpg");
    background-size: cover;
    height: 100%;
    width: 100%;
    border: 2px black solid;
  `,
};
