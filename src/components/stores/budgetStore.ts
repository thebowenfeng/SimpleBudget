import { Action, createActionsHook, createStateHook, createStore } from 'react-sweet-state'

export interface CategoryType {
  title: string;
  id: string;
}

export interface GroupType {
  title: string;
  id: string;
  children: CategoryType[]
}

export type BudgetState = { state: GroupType[] }
export type BudgetActions = typeof actions

function getIndex(id: string, lst: GroupType[] | CategoryType[]): number {
  for (let i = 0; i < lst.length; i++) {
    const item = lst[i];
    if (item.id == id) {
      return i;
    }
  }
  return 9999;
}

function findObj(id: string, lst: GroupType[]): GroupType {
  for (const item of lst) {
    if (item.id == id) {
      return item;
    }
  }
}

const initialState: BudgetState = {
  state: []
}

export const actions = {
  loadBudget: (data: GroupType[]): Action<BudgetState> => ({setState}) => {
    setState({ state: data })
  },
  swapGroup: (item1: GroupType, item2: GroupType): Action<BudgetState> =>
    async ({setState, getState}) => {
      const newState = [...getState().state]
      const index1 = getIndex(item1.id, newState);
      const index2 = getIndex(item2.id, newState);

      newState[index1] = item2;
      newState[index2] = item1;
      setState({ state: newState })
    },
  swapCategory: (groupId: string, item1: CategoryType, item2: CategoryType): Action<BudgetState> =>
    ({setState, getState}) => {
      const newState = [...getState().state]
      const group = findObj(groupId, newState);
      const newChildrenState = [...group.children]
      const index1 = getIndex(item1.id, newChildrenState);
      const index2 = getIndex(item2.id, newChildrenState);

      newChildrenState[index1] = item2;
      newChildrenState[index2] = item1;

      group.children = newChildrenState;
      setState({ state: newState })
    }
}

const store = createStore<BudgetState, BudgetActions>({
  initialState,
  actions
})

export const useBudgetState = createStateHook(store)
export const useBudgetActions = createActionsHook(store)
