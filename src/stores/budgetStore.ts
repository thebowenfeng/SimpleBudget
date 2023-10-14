import { Action, createActionsHook, createStateHook, createStore } from 'react-sweet-state'
import '../components/Spreadsheet/Animation.css'

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

function findObj(id: string, lst: GroupType[]): GroupType | null {
  for (const item of lst) {
    if (item.id == id) {
      return item;
    }
  }
  return null;
}

function addAnimation(index1: number, index2: number, id1: string, id2: string) {
  if (document.getElementById(id1) && document.getElementById(id2)) {
    // @ts-ignore
    document.getElementById(id1).style.animation = "slide-animation 0.3s ease"
    // @ts-ignore
    document.getElementById(id2).style.animation = "slide-animation 0.3s ease"
    // @ts-ignore
    document.getElementById(id1).style.setProperty('--m', `${(index2 - index1) * 40}px`)
    // @ts-ignore
    document.getElementById(id2).style.setProperty('--m', `${(index1 - index2) * 40}px`)
  }
}

function removeAnimation(item1: GroupType | CategoryType, item2: GroupType | CategoryType) {
  if (document.getElementById(item1.id) && document.getElementById(item2.id)) {
    document.getElementById(item1.id)?.style.removeProperty('animation')
    document.getElementById(item2.id)?.style.removeProperty('animation')
    item1.transitioning = false;
    item2.transitioning = false;
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
        if (group) {
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
    },
  addGroup: (groupId: string, title: string): Action<BudgetState> =>
    ({setState, getState}) => {
      const currState = [...getState().state]
      currState.push({
        id: groupId,
        title: title,
        transitioning: false,
        children: []
      })
      setState({state: currState})
    },
  removeGroup: (groupId: string): Action<BudgetState> =>
    ({getState, setState}) => {
      const currState = [...getState().state];
      const newState = currState.filter((obj) => obj.id != groupId);
      setState({state: newState})
    },
  modifyGroup: (groupId: string, newGroup: GroupType): Action<BudgetState> =>
    ({setState, getState}) => {
      const newState = [...getState().state];
      const ind = getIndex(groupId, newState);
      newState.splice(ind, 1);
      newState.splice(ind, 0, newGroup);

      setState({state: newState});
    }
}

const store = createStore<BudgetState, BudgetActions>({
  initialState,
  actions
})

export const useBudgetState = createStateHook(store)
export const useBudgetActions = createActionsHook(store)
