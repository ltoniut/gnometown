import React, { FC, useEffect, useRef, useState } from "react";
import { Subject } from "rxjs";
import { Citizen } from "../interfaces";
import { CitizenDisplay } from "./CitizenDisplay";
import { css } from "emotion";
import { CitizenDetails } from "./CitizenDetails";
import { A, pipe } from "../prelude.d";

interface Props {
  inputs$: Subject<string>;
  citizens: Array<Citizen>;
}

export const CitizenList: FC<Props> = ({ inputs$, citizens }) => {
  const [allCitizens] = useState<Array<Citizen>>(citizens);
  const [filteredCitizens, setFilteredCitizens] = useState<Array<Citizen>>(citizens);
  const [filter, setFilter] = useState<string>("");
  const [start, setStart] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current && scrolling) {
      const refValue = listRef.current;
      if (refValue.scrollHeight + refValue.scrollTop === refValue.clientHeight) {
        setScrolling(false);
        if (start < filteredCitizens.length) {
          setStart(start + 8);
        }
        listRef.current.scrollTop = 20;
      } else if (refValue.scrollTop === 0) {
        setScrolling(false);
        if (start > 0) {
          setStart(start - 8);
        }
        listRef.current.scrollTop = refValue.clientHeight - refValue.scrollHeight - 20;
      }
    }
  }, [scrolling]);

  useEffect(() => {
    const s = inputs$.subscribe(f => setFilter(f));
    return () => {
      s.unsubscribe();
    };
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
    <div className={styles.list} ref={listRef} onScroll={() => setScrolling(true)}>
      <ul>
        {pipe(
          filteredCitizens.slice(start, start + 15),
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
            />
          )),
        )}
      </ul>
    </div>
  );
};

const styles = {
  list: css`
    height: 91%;
    width: 100%;
    padding-right: 3vh;
    float: left;
    overflow-y: scroll;
  `,
};
