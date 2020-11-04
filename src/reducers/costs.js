import { COST_SPLIT } from "../actions";

const initialState = {};

const costs = (state = initialState, action) => {
  switch (action.type) {
    case COST_SPLIT:
      const isTotalCost = action.cost <= 0;
      const isTotalNumber = action.person <= 0;
      const isBelowNull = isTotalCost || isTotalNumber;
      if (isBelowNull) {
        const errorMessage = isTotalCost
          ? "合計額を入力して下さい"
          : "人数を入力して下さい";
        return alert(errorMessage);
      }
      return {
        ...state,
        [action.id]: {
          id: action.id,
          cost: action.cost,
          person: action.person,
          splitCost: action.splitCost
        }
      };
    default:
      return state;
  }
};

export default costs;
