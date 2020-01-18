import * as B from 'fp-ts/lib/BooleanAlgebra';
import * as E from 'fp-ts/lib/Either';
import { constant, Lazy } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as T from 'fp-ts/lib/Task';
import { Task } from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';
import { TaskEither } from 'fp-ts/lib/TaskEither';

export const constEmptyString: Lazy<string> = () => '';
export const constNone = constant(O.none);

export const foldToPromise = <X, Y>(t: TaskEither<X, Y>): Promise<Y> =>
  t().then(
    E.fold(
      x => Promise.reject<Y>(x),
      y => Promise.resolve<Y>(y),
    ),
  );

export const foldToTask = <X>(te: TaskEither<X, X>): Task<X> => TE.fold<X, X, X>(T.of, T.of)(te);

export const not = B.booleanAlgebraBoolean.not;

export const tap = <X>(fn: (x: X) => void) => (x: X) => {
  fn(x);
  return x;
};

export const foldBoolean = <X>(onFalse: () => X, onTrue: () => X) => (value: boolean) =>
  value ? onTrue() : onFalse();
