import { css } from "emotion";
import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux-hooks";

interface Props {
  title: string;
}

export const NameDisplay: FC<Props> = ({ title }) => {
  const [display, setDisplay] = useState<boolean>(true);

  useEffect(() => {
    // REVIEW This is a side effect. As such, it CANNOT be present at a component render.
    const t = setTimeout(() => setDisplay(false), 7000); // Hide town name after 7 seconds
    // REVIEW cleanup function for this effect. Must be returned at the end of useEffect.
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.component} onClick={() => setDisplay(false)}>
      {display && <a>{title}</a>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  displayName: state.display
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({
      type: 'SHOW_NAME', payload: false
    })
  });


//Reducer
const initialState = {
  displayName: true
};

export default connect(mapStateToProps, mapDispatchToProps)(NameDisplay);

const styles = {
  component: css`
    margin-top: 8vh;
    text-align: center;
    position: absolute;
    font-size: 7vh;
    width: 80%;
  `
};
