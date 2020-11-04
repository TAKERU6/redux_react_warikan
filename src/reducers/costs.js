import { COST_SPLIT } from "../actions";

const initialState = {};

const costs = (state = initialState, action) => {
  switch (action.type) {
    case COST_SPLIT:
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
