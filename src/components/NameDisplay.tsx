import { css } from "emotion";
import React, { FC, useState, useEffect } from "react";

type Props = {
  title: string;
};

export const NameDisplay: FC<Props> = ({ title }) => {
  const [display, setDisplay] = useState<boolean>(true);

  useEffect(() => {
    const t = setTimeout(() => setDisplay(false), 7000); // Hide town name after 7 seconds
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={styles.component}
      onClick={() => {
        return setDisplay(!display);
      }}
    >
      {display && <a>{title}</a>}
    </div>
  );
};

const styles = {
  "@font-face": {
    fontFamily: "introrustg",
    src: "/assets/introrustg-base2line.otf",
  },
  component: css`
    margin-top: 8vh;
    text-align: center;
    position: absolute;
    font-size: 7vh;
    font-family: "introrustg";
    width: 80%;
  `,
};
