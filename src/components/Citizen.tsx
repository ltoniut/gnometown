import React, { useState, FC } from 'react';
import CitizenDetails from './CitizenDetails';
import { styles } from '../styles';
import { CitizenData } from '../interfaces';

const Citizen: FC<CitizenData> = data => {
  const [name] = useState<string>(data.name);
  const [image] = useState<string>(data.thumbnail);
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div className= { styles.citizen } onClick={() => setDisplay(!display)}>
      <img className = {styles.citizenPicture} src={image}></img>
      <div>{name}</div>
      {display && <CitizenDetails
        height = { data.height }
        weight = { data.weight }
        professions = { data.professions }
        age = { data.age } />}
    </div>
  )
}

export default Citizen;