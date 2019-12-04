import React, { useState, FC } from "react";

type Details = {
  age: number;
  weight: number;
  height: number;
  professions: Array<string>;
}

const CitizenDetails: FC<Details> = data => {
  const [height] = useState<number>(data.height);
  const [weight] = useState<number>(data.weight);
  const [professions] = useState<Array<string>>(data.professions);

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