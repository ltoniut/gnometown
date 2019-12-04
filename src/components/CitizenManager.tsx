import React, { useRef, useState, useEffect, FC } from 'react';
import { styles } from '../styles';
import CitizenList from './CitizenList';
import { Subject } from'rxjs';
import { CitizenData } from '../interfaces';

const Sources = require('../sources.json');

const CitizenManager: FC<Array<CitizenData>> = props => {
  const [citizenData] : Array<CitizenData> = useState<any>(props)
  const [display, setDisplay] = useState<boolean>(true);
  const [filter] = useState<string>('');

  const [inputs$] = useState(() => new Subject());
  
  const rightArrow: string = "assets/" + Sources.rightArrowAsset;

  return (
    <div className = {styles.citizenManagerBar} >
      <div className = {styles.citizenManagerArrow} onClick={() => setDisplay(!display)}>
        <img src={rightArrow} />
      </div>
      {display && <div className = {styles.citizenManager} >
        <div className = {styles.citizenFilter} >Filter Citizens:<br/>
        <input type="text" onChange={e => inputs$.next(e.target.value)} /></div>
        <CitizenList data = {props} filter = {filter} inputs$={inputs$ as Subject<string>} />
      </div> }
    </div>
  )
}

export default CitizenManager;