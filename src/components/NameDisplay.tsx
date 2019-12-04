import React, { useState, useEffect } from 'react';
import { styles } from '../styles';

const Sources = require('../sources.json');

const NameDisplay = props => {
  const [title, setTitle] = useState<string>(props.title);
  const [display, setDisplay] = useState<boolean>(true);

  setTimeout(function() { setDisplay(false); }, 7000); // Hide town name after 7 seconds
  
  return (
    <div className = {styles.fadingName} onClick={() => setDisplay(false)}>
      {display && <a>{title}</a>}
    </div>
  );
}

export default NameDisplay;