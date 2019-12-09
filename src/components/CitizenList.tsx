import { css } from "emotion";
import React, { FC, useEffect, useRef, useState, useReducer } from "react";
import { Subject } from "rxjs";
import { Citizen } from "../domain";
import * as A from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/pipeable";
import { CitizenDisplay } from "./CitizenDisplay";
import { Action } from "redux";

const assets = require("../assets.json");

const upArrow: string = assets.upArrow;
const downArrow: string = assets.downArrow;

interface Props {
  inputs$: Subject<string>;
  citizens: Array<Citizen>;
}

const quantityDisplayed = 15;
const scrollDistance = 5;

const scrollerReducer = (state: number, action: Action) => {
  switch (action.type) {
    case "DESCEND":
      return state + scrollDistance;
    case "ASCEND":
      return state - scrollDistance;
    default:
      throw new Error();
  }
};

export const CitizenList: FC<Props> = ({ inputs$, citizens }) => {
  const [allCitizens] = useState<Array<Citizen>>(citizens);
  const [filteredCitizens, setFilteredCitizens] = useState<Array<Citizen>>(citizens);
  const [filter, setFilter] = useState<string>("");
  const listRef = useRef<HTMLDivElement>(null);

  const [start, dispatch] = useReducer<(state: number, action: Action) => number>(
    scrollerReducer,
    0,
  );

  const handleDownArrow = () => {
    dispatch({ type: "DESCEND" });
  };
  const handleUpArrow = () => {
    dispatch({ type: "ASCEND" });
  };

  useEffect(() => {
    if (start < 0) {
      handleUpArrow();
    }
    if (start >= filteredCitizens.length) {
      handleDownArrow();
    }
  }, [start]);

  useEffect(() => {
    const s = inputs$.subscribe(f => setFilter(f));
    return () => s.unsubscribe();
  }, [filter]);

  useEffect(() => {
    setFilteredCitizens(
      allCitizens.filter(
        ({ professions, name }) =>
          name.toLowerCase().includes(filter.toLowerCase()) ||
          professions.filter(p => p.toLowerCase().includes(filter.toLowerCase())).length,
      ),
    );
  }, [filter]);

  return (
    <div className={styles.list} ref={listRef}>
      <div className={styles.directionalButton} onClick={handleUpArrow}>
        <img className={styles.arrow} src={upArrow}></img>
      </div>
      <ul className={styles.citizens}>
        {pipe(
          filteredCitizens.slice(start, start + quantityDisplayed),
          A.map(c => (
            <CitizenDisplay
              key={c.id}
              id={c.id}
              name={c.name}
              thumbnail={c.thumbnail}
              professions={c.professions}
              age={c.age}
              height={c.height}
              weight={c.weight}
              hair_color={c.hair_color}
              friends={c.friends}
            />
          )),
        )}
      </ul>
      <div className={styles.directionalButton} onClick={handleDownArrow}>
        <img className={styles.arrow} src={downArrow}></img>
      </div>
    </div>
  );
};

const styles = {
  list: css`
    height: 91%;
    width: 100%;
    float: left;
    overflow-y: scroll;
  `,
  citizens: css`
    padding-right: 1.7rem;
    padding-top: 1.7rem;
  `,
  directionalButton: css`
    width: 100%;
    float: right;
    background-color: gold;
    padding: 2%;
    background-color: rgba(200, 180, 100, 5);
  `,
  arrow: css`
    margin: auto;
    vertical-align: center;
    max-width: 2.2rem;
  `,
};
