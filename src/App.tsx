import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { Stage } from "./components/Stage";
import { css } from "emotion";
import { useAsyncEffect } from "use-async-effect";

// TODO Review any
const Sources: any = require("./sources.json");

export const App: FC = () => {
  const [fileName, setFileName] = useState<string>(Sources.town);
  const [JSONData, setJSONData] = useState<any>();

  useEffect(() => {Promise.resolve(async () => {
    await fetch(fileName as string)
      .then(res => res.json())
      .then(res => setJSONData(res));
      });
    }, [fileName]);

  async function fetchData() {
    const parsedJson = await fetch(fileName as string)
    .then(res => res.json())
    .then(res => setJSONData(res))
    .then(res => console.log(fileName as string))
    .then(res => console.log(JSONData));
  }

  useEffect(() => console.log(JSONData), [JSONData]);
  return (
    JSONData && (
      <div className={styles.component}>
        <Stage townData={JSONData} />
      </div>
    )
  );
};

const styles = {
  component: css`
    width: 100%;
    height: 90vh;
    text-align: center;
    margin-top: 0%;
    `
}
