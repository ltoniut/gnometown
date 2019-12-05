import { css } from "emotion";
import React, { FC, useReducer } from "react";
import { Action } from "redux";
import { Town } from "../interfaces";
import { CitizenManager } from "./CitizenManager";
import { NameDisplay } from "./NameDisplay";

interface Props {
  town: Town;
}

type State = {
  data?: HNResponse;
  isLoading: boolean;
  error?: string;
};

type HNResponse = {
  hits: {
    title: string;
    objectID: string;
    url: string;
  }[];
};

const hoverReducer = (state: boolean, action: Action) => {
  switch (action.type) {
    case "SHOW_MANAGER":
      return true;
    case "HIDE_MANAGER":
      return false;
    default:
      throw new Error();
  }
};

export const Stage: FC<Props> = ({ town }) => {
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
    <div
      className={styles.component}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NameDisplay title={town.name} />
      <CitizenManager citizens={town.citizens} inheritedDisplay={hover} />
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
