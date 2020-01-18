import { css } from "emotion";
import React, { FC, useState } from "react";
import useAsyncEffect from "use-async-effect";
import { Stage } from "./components/Stage";
import { Citizen, Town } from "./domain";

const assets = require("./assets.json");
type TownData = Array<Citizen>;

export const App: FC = () => {
  const [jsonTowns, setTowns] = useState<Record<string, TownData>>({});

  useAsyncEffect(async () => {
    await fetch(assets.town as string)
      .then(res => res.json())
      .then(res => setTowns(res));
  }, []);

  const towns: Town[] = Object.entries(jsonTowns).map(([name, citizens]) => ({ name, citizens })) as any;

  if (towns.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.component}>
      <Stage town={towns[0]} />
    </div>
  );
};

const styles = {
  component: css`
    width: 100%;
    height: 90vh;
    text-align: center;
    margin-top: 0%;
  `,
};
