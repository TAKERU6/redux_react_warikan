export const COST_SPLIT = "COST_SPLIT";

let id = 0;
export const costSplit = (cost, person) => {
  return {
    type: COST_SPLIT,
    id: id++,
    cost,
    person,
    splitCost: cost / person
  };
};
