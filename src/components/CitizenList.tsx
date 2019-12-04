import React, { FC, useEffect, useRef, useState } from "react";
import { Subject } from "rxjs";
import { CitizenData } from "../interfaces";
import { Citizen } from "./Citizen";
import { css } from "emotion";

type ListData = {
  filter: string;
  inputs$: Subject<string>;
  data: Array<CitizenData>;
};

export const CitizenList: FC<ListData> = props => {
  const inputs$ = props.inputs$;
  const [citizenData, setCitizenData] = useState<Array<CitizenData>>(
    props.data
  );
  const [filter, setFilter] = useState<string>(props.filter);
  const [start, setStart] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current && scrolling) {
      const refValue = listRef.current;
      if (
        refValue.scrollHeight + refValue.scrollTop ===
        refValue.clientHeight
      ) {
        reachBottom();
        listRef.current.scrollTop = 20;
      } else if (refValue.scrollTop === 0) {
        reachTop();
        listRef.current.scrollTop =
          refValue.clientHeight - refValue.scrollHeight - 20;
      }
    }
  }, []);

  useEffect(() => {
    const subscription = inputs$.subscribe(f => setFilter(f));
  }, []);

  useEffect(() => {
    setCitizenData(
      props.data.filter(citizen => {
        const existsJob: Array<string> = citizen.professions.filter(job => {
          return job.toLowerCase().includes(filter.toLowerCase());
        });
        return (
          citizen.name.toLowerCase().includes(filter.toLowerCase()) ||
          existsJob.length
        );
      })
    );
  }, [filter]);

  function reachTop() {
    setScrolling(false);
    if (start > 0) {
      setStart(start - 8);
    }
  }

  function reachBottom() {
    setScrolling(false);
    if (start < citizenData.length) {
      setStart(start + 8);
    }
  }

  const listCitizens = citizenData
    .slice(start, start + 15)
    .map((citizen: any) => (
      <Citizen
        id={citizen.id}
        name={citizen.name}
        thumbnail={citizen.thumbnail}
        professions={citizen.professions}
        age={citizen.age}
        height={citizen.height}
        weight={citizen.weight}
      />
    ));

  return (
    <div
      className={styles.list}
      ref={listRef}
      onScroll={() => setScrolling(true)}
    >
      <ul>{listCitizens}</ul>
    </div>
  );
};

const styles = {
  list: css`
    height: 91%;
    width: 100%;
    overflow-y: scroll;
  `
};
