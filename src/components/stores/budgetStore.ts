import { Action, createActionsHook, createStateHook, createStore } from 'react-sweet-state'
import '../Spreadsheet/Animation.css'

export interface CategoryType {
  title: string;
  id: string;
  transitioning: boolean;
}

export interface GroupType {
  title: string;
  id: string;
  transitioning: boolean
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

function addAnimation(index1: number, index2: number, id1: string, id2: string) {
  if (index1 < index2) {
    document.getElementById(id1).style.animation = "top-bottom 0.3s ease"
    document.getElementById(id2).style.animation = "bottom-top 0.3s ease"
  } else {
    document.getElementById(id2).style.animation = "top-bottom 0.3s ease"
    document.getElementById(id1).style.animation = "bottom-top 0.3s ease"
  }
}

function removeAnimation(item1: GroupType | CategoryType, item2: GroupType | CategoryType) {
  document.getElementById(item1.id).style.animation = null
  document.getElementById(item2.id).style.animation = null
  item1.transitioning = false;
  item2.transitioning = false;
}

const initialState: BudgetState = {
  state: []
}

export const actions = {
  loadBudget: (data: GroupType[]): Action<BudgetState> => ({setState}) => {
    setState({ state: data })
  },
  swapGroup: (item1: GroupType, item2: GroupType): Action<BudgetState> =>
    ({setState, getState}) => {
      if (!item1.transitioning && !item2.transitioning) {
        item1.transitioning = true;
        item2.transitioning = true;
        const newState = [...getState().state]
        const index1 = getIndex(item1.id, newState);
        const index2 = getIndex(item2.id, newState);

        addAnimation(index1, index2, item1.id, item2.id);

        newState[index1] = item2;
        newState[index2] = item1;

        setTimeout(() => {
          removeAnimation(item1, item2);
          setState({ state: newState })
        }, 250);
      }
    },
  swapCategory: (groupId: string, item1: CategoryType, item2: CategoryType): Action<BudgetState> =>
    ({setState, getState}) => {
      if (!item1.transitioning && !item2.transitioning) {
        item1.transitioning = true;
        item2.transitioning = true;
        const newState = [...getState().state]
        const group = findObj(groupId, newState);
        const newChildrenState = [...group.children]
        const index1 = getIndex(item1.id, newChildrenState);
        const index2 = getIndex(item2.id, newChildrenState);

        addAnimation(index1, index2, item1.id, item2.id);

        newChildrenState[index1] = item2;
        newChildrenState[index2] = item1;

        group.children = newChildrenState;

        setTimeout(() => {
          removeAnimation(item1, item2);
          setState({ state: newState })
        }, 250);
      }
    }
}

const store = createStore<BudgetState, BudgetActions>({
  initialState,
  actions
})

export const useBudgetState = createStateHook(store)
export const useBudgetActions = createActionsHook(store)
