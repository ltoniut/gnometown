import React, { useState } from "react";

const CitizenDetails = props => {
  const [height, setHeight] = useState<string>(props.data.height);
  const [weight, setWeight] = useState<string>(props.data.weight);
  const [professions, setProfessions] = useState<Array<string>>(props.data.professions);

  return (
    <div>
      <div>Height: {height}</div>
      <div>Weight: {weight}</div>
      <div>Jobs:
        <ul>
          {professions.map((profession: string) =>
            <li key={profession} >{profession}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CitizenDetails;