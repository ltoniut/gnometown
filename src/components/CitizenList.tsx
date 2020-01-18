import { css } from "emotion";
import React, { FC, useEffect, useState, useReducer } from "react";
import { Subject } from "rxjs";
import { Citizen } from "../domain";
import * as A from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/pipeable";
import { CitizenDisplay } from "./CitizenDisplay";
import { Action } from "redux";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

  const [start, dispatch] = useReducer<(state: number, action: Action) => number>(
    scrollerReducer,
    0,
  );

  const handleDownArrow = () => {
    dispatch({ type: "DESCEND" });
  };
  const handleUpArrow = () => {
    if (start > 0) {
      dispatch({ type: "ASCEND" });
    } else {
      alert("Top of list");
    }
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
    <div className={styles.list}>
      <div className={styles.directionalButton} onClick={handleUpArrow}>
        <ExpandLessIcon className={styles.arrow} fontSize="large" />
      </div>
      <ul className={styles.citizens}>
        {pipe(
          filteredCitizens.slice(start, start + quantityDisplayed),
          A.map((c: any) => (
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
        <ExpandMoreIcon className={styles.arrow} fontSize="large" />
      </div>
    </div>
  );
};

const styles = {
  list: css`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  `,
  citizens: css`
    padding-top: 0;
    margin: 0;
    padding-right: 1.7rem;
    padding-top: 1.7rem;
  `,
  directionalButton: css`
    width: 100%;
    background-color: gold;
    background-color: #222;
    float: left;
  `,
  arrow: css`
    margin: auto;
    vertical-align: center;
    max-width: 2.2rem;
    color: white;
  `,
};
