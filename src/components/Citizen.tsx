import React, { useState } from 'react';
import CitizenDetails from './CitizenDetails';
import { styles } from '../styles';


const Citizen = props => {
  const [name, setName] = useState<string>(props.data.name);
  const [image, setImage] = useState<string>(props.data.thumbnail);
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div className= { styles.citizen } onClick={() => setDisplay(!display)}>
      <img className = {styles.citizenPicture} src={image}></img>
      <div>{name}</div>
      {display && <CitizenDetails data={props.data} />}
    </div>
  )
}

export default Citizen;