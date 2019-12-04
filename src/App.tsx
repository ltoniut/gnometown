import React, { useState, useEffect } from "react";
import Stage from "./components/Stage";
import "./App.css";
import { styles } from './styles';

const Sources: any = require('./sources.json');

const App = () => {
  const [fileName, setFileName] = useState<string>(Sources.town);
  const [JSONData, setJSONData] = useState<any>();
  
  useEffect(() => { 
    if(!JSONData) {
      fetchData();
    }
  });

  if(!JSONData) {
    fetchData();

    console.log(JSON.stringify(JSONData));
  }

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  async function fetchData() {
    const parsedJson = await fetch(fileName as string)
    .then(res => res.json())
    .then(res => setJSONData(res))
    .then(res => console.log(fileName as string))
    .then(res => console.log(JSONData));
  }
  React.useEffect(() => console.log(JSONData), [JSONData]);

  return JSONData ? 
      <div className = { styles.mainApp }>
        <Stage townData = {JSONData} />
      </div>
  :
    <div></div>
}

export default App;
