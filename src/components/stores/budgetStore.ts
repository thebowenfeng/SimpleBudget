import { Action, createActionsHook, createStateHook, createStore } from 'react-sweet-state'
import '../Spreadsheet/Animation.css'

export interface CategoryType {
  title: string;
  id: string;
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

        if (index1 < index2) {
          document.getElementById(item1.id).style.animation = "top-bottom 0.3s ease"
          document.getElementById(item2.id).style.animation = "bottom-top 0.3s ease"
        } else {
          document.getElementById(item2.id).style.animation = "top-bottom 0.3s ease"
          document.getElementById(item1.id).style.animation = "bottom-top 0.3s ease"
        }

        newState[index1] = item2;
        newState[index2] = item1;

        setTimeout(() => {
          document.getElementById(item1.id).style.animation = null
          document.getElementById(item2.id).style.animation = null
          item1.transitioning = false;
          item2.transitioning = false;
          setState({ state: newState })
        }, 250);
      }
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
