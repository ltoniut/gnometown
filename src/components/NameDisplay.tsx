import { css } from "emotion";
import React, { FC, useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

type Props = PropsFromRedux & {
  title: string;
};

const NameDisplay: FC<Props> = props => {
  /*useEffect(() => {
    const t = setTimeout(() => setDisplay(false), 7000); // Hide town name after 7 seconds
    return () => clearTimeout(t);
  }, []);*/

  return (
    <div className={styles.component} onClick={props.onClick}>
      {props.display && <a>{props.title}</a>}
    </div>
  );
};

//Reducer

interface RootDisplay {
  display: boolean;
}

const mapState = (state: RootDisplay) => ({
  display: state.display,
});

const mapDispatch = {
  onClick: () => ({
    type: "SHOW_NAME",
    payload: false,
  }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const styles = {
  component: css`
    margin-top: 8vh;
    text-align: center;
    position: absolute;
    font-size: 7vh;
    width: 80%;
  `,
};

export default connector(NameDisplay);
