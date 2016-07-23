import { COUNTER } from '../constants/ActionTypes';

export function increment() {
  return {
    type: COUNTER.INCREMENT
  };
}
