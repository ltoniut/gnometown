import { css } from "emotion";
import React, { FC, useState } from "react";
import useAsyncEffect from "use-async-effect";
import { Stage } from "./components/Stage";
import { Citizen } from "./domain";
import * as R from "fp-ts/lib/Record";
import * as A from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/pipeable";

const assets = require("./assets.json");
type TownData = Array<Citizen>;

export const App: FC = () => {
  const [fileName] = useState<string>(assets.town);
  const [towns, setTowns] = useState<Record<string, TownData>>({});

  useAsyncEffect(async () => {
    await fetch(fileName as string)
      .then(res => res.json())
      .then(res => setTowns(res));
  }, [fileName]);

  const townO = pipe(
    towns,
    R.toArray,
    A.head,
    O.map(([name, citizens]) => ({ name, citizens })),
  );

  return pipe(
    townO,
    O.fold(
      () => <div>Loading...</div>,
      t => (
        <div className={styles.component}>
          <Stage town={t} />
        </div>
      ),
    ),
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
