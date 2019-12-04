import React, { useState } from 'react';
import NameDisplay from './NameDisplay';
import CitizenManager from './CitizenManager';
import { styles } from '../styles';
import { CitizenData } from '../interfaces';


const Stage = props => {
  console.log(props.townData);
  const nameData = Object.keys(props.townData)[0];
  const citizenData : Array<CitizenData>  = props.townData[Object.keys(props.townData)[0]];
  const [townName, setTownName] = useState<string>(nameData);
  const [townData, setTownData] = useState<Array<CitizenData>>(citizenData);

  return props.townData ?
      <div className = {styles.stage}>
        <NameDisplay title={townName} />
        <CitizenManager data={townData} />
      </div> :
      <div className = {styles.stage}>
        <NameDisplay title={townName} />
        <CitizenManager data={townData} />
      </div>
}

export default Stage;