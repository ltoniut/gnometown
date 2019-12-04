import React, { useRef, useState, useEffect } from 'react';
import { styles } from '../styles';
import CitizenList from './CitizenList';
import { Subject } from'rxjs';
import { CitizenData } from '../interfaces';

const Sources = require('../sources.json');

const CitizenManager = props => {
  const [citizenData, setCitizenData] : Array<CitizenData> = useState<any>(props.data)
  const [display, setDisplay] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('');
  const [start, setStart] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);

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
        <CitizenList data = {citizenData} filter = {filter} inputs$={inputs$} />
      </div> }
    </div>
  )
}

export default CitizenManager;