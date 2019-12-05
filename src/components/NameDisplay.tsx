import { css } from "emotion";
import React, { FC, useState, useEffect } from "react";

interface Props {
  title: string;
}

export const NameDisplay: FC<Props> = ({ title }) => {
  const [display, setDisplay] = useState<boolean>(true);

  useEffect(() => {
    const t = setTimeout(() => setDisplay(false), 7000); // Hide town name after 7 seconds
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.component} onClick={() => setDisplay(false)}>
      {display && <a>{title}</a>}
    </div>
  );
};

//Reducer

const mapStateToProps = state => ({
  displayName: state.display
});

const mapDispatchToProps = dispatch => ({
  onClick: () =>
    dispatch({
      type: "SHOW_NAME",
      payload: false
    })
});

const initialState = {
  displayName: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MY_COMPONENT":
      return { ...state, showMyComponent: action.payload };
    default:
      return state;
  }
};

const styles = {
  component: css`
    margin-top: 8vh;
    text-align: center;
    position: absolute;
    font-size: 7vh;
    width: 80%;
  `
};
