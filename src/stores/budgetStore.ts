import { Action, createActionsHook, createStateHook, createStore } from 'react-sweet-state'
import '../components/Spreadsheet/Animation.css'
import { Firestore, addDoc, collection, doc, deleteDoc, getDocs, query, where, updateDoc, arrayUnion } from 'firebase/firestore'
import { User } from 'firebase/auth'

interface MonthlyData {
  month: number,
  year: number,
  assigned: number,
  available: number,
}

export interface CategoryType {
  title: string;
  id: string;
  transitioning: boolean;
  type: "spending" | "saving";
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  amount: number;
  rawAmount: number;
  data: MonthlyData[]
}

export interface GroupType {
  title: string;
  id: string;
  transitioning: boolean
  children: CategoryType[]
}

export type BudgetState = { state: GroupType[], loading: boolean }
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

export function randId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

const initialState: BudgetState = {
  state: [],
  loading: false
}

export const actions = {
  loadBudget: (db: Firestore, user: User, onSuccess: () => void, onError: (error: never) => void): Action<BudgetState> => ({setState}) => {
    setState({state: [], loading: true})
    getDocs(query(collection(db, user.uid), where("recordType", "==", "group"))).then(async (snapshot) => {
      const newData: GroupType[] = []
      for (const doc of snapshot.docs) {
        try {
          const budgetCategories = await getDocs(query(collection(db, user.uid, doc.id, "categories")));

          newData.push({
            id: doc.id,
            title: doc.data()["title"],
            transitioning: false,
            children: budgetCategories.docs.map((obj) => {
              return {
                id: obj.id,
                title: obj.data()["title"],
                transitioning: false,
                type: obj.data()["type"],
                frequency: obj.data()["frequency"],
                amount: obj.data()["amount"],
                rawAmount: obj.data()["rawAmount"],
                data: obj.data()["data"]
              }
            })
          });
          // eslint-disable-next-line
        } catch (e: any) {
          onError(e as never);
          setState({ state: [], loading: false })
          return;
        }
      }

      onSuccess();
      setState({ state: newData, loading: false })
    }).catch((error) => {
      onError(error as never);
    })
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
  addGroup: (title: string, db: Firestore, user: User, onSuccess: () => void, onError: (error: never) => void): Action<BudgetState> =>
    ({setState, getState}) => {
      const currState = [...getState().state]
      const tempId = randId();

      currState.push({
        id: tempId,
        title: title,
        transitioning: false,
        children: []
      })
      setState({state: currState})

      addDoc(collection(db, user.uid), {title: title, recordType: "group"}).then((obj) => {
        const curr = [...getState().state];
        curr[getIndex(tempId, curr)].id = obj.id
        setState({state: curr});
        onSuccess();
      }).catch((error) => {
        const newState = [...getState().state].filter((obj) => obj.id != tempId)
        setState({state: newState})
        onError(error as never);
      })
    },
  removeGroup: (groupId: string, db: Firestore, user: User, onSuccess: () => void, onError: (error: never) => void): Action<BudgetState> =>
    ({getState, setState}) => {
      const currState = [...getState().state];
      const removedObj = currState.filter((obj) => obj.id == groupId)[0];
      const newState = currState.filter((obj) => obj.id != groupId);
      setState({state: newState});

      deleteDoc(doc(db, user.uid, groupId)).then(() => {
        onSuccess();
      }).catch((error) => {
        onError(error as never);
        setState({state: [...getState().state, removedObj]})
      })
    },
  modifyGroup: (groupId: string, title: string, db: Firestore, user: User, onSuccess: () => void, onError: (error: never) => void): Action<BudgetState> =>
    ({setState, getState}) => {
      const ind = getIndex(groupId, getState().state);
      const oldTitle = getState().state[ind].title;
      getState().state[ind].title = title;
      setState({state: [...getState().state]});

      updateDoc(doc(db, user.uid, groupId), { title: title }).then(() => {
        onSuccess();
      }).catch((error) => {
        getState().state[ind].title = oldTitle;
        setState({state: [...getState().state]});
        onError(error as never);
      })
    },
  addBudget: (budget: CategoryType, groupId: string, db: Firestore, user: User, onSuccess: () => void, onError: (error: never) => void): Action<BudgetState> =>
    ({setState, getState}) => {
      const groupObj = findObj(groupId, getState().state);
      if (groupObj) {
        groupObj.children = [...groupObj.children, budget];
        setState({state: [...getState().state]})

        // eslint-disable-next-line
        const {id: _, transitioning: __, ...dbRecord} = budget;

        addDoc(collection(db, user.uid, groupId, "categories"), dbRecord).then((docRef) => {
          onSuccess();
          const categoryIndex = getIndex(budget.id, groupObj.children);
          groupObj.children[categoryIndex].id = docRef.id;
          setState({state: [...getState().state]});
        }).catch((error) => {
          onError(error as never);
          groupObj.children = groupObj.children.filter((obj) => obj.id != budget.id);
          setState({state: [...getState().state]})
        })
      } else {
        onError({code: "Invalid group", message: "Cannot find group"} as never);
      }
    },
  deleteBudget: (budgetId: string, db: Firestore, user: User, onSuccess: () => void, onError: (error: never) => void): Action<BudgetState> =>
    ({setState, getState}) => {
      const newState = [...getState().state];
      let groupObj: GroupType | undefined = undefined;
      for (const group of newState) {
        for (const category of group.children) {
          if (category.id == budgetId) {
            groupObj = group;
            break;
          }
        }
      }

      if (groupObj) {
        const budgetInd = getIndex(budgetId, groupObj.children);
        const budgetObj = groupObj.children[budgetInd];
        groupObj.children = groupObj.children.filter((obj) => obj.id != budgetId);
        setState({state: newState})

        deleteDoc(doc(db, user.uid, groupObj.id, "categories", budgetId)).then(() => {
          onSuccess();
        }).catch((error) => {
          onError(error as never);
          const newGroupObj = getState().state.filter((obj) => obj.id == groupObj?.id)[0];
          newGroupObj.children.splice(budgetInd, 0, budgetObj);
          setState({state: [...getState().state]})
        })
      }
    },
  addDefaultMonthlyData: (month: number, year: number, db: Firestore, user: User, onError: (error: never) => void): Action<BudgetState> =>
    ({setState, getState}) => {
      const newState = [...getState().state];
      for (const group of newState) {
        for (const budget of group.children) {
          if (budget.data.filter((obj) => obj.month == month && obj.year == year).length == 0) {
            let prevMonth = month - 1;
            let prevYear = year;
            if (prevMonth == -1) {
              prevMonth = 11;
              prevYear -= 1;
            }

            let prevAvail = 0;
            if (budget.data.filter((obj) => obj.month == prevMonth && obj.year == prevYear).length != 0) {
              prevAvail += budget.data.filter((obj) => obj.month == prevMonth && obj.year == prevYear)[0].available;
            }

            budget.data = [...budget.data, {month: month, year: year, assigned: 0, available: prevAvail}];
            setState({state: newState});

            updateDoc(doc(db, user.uid, group.id, "categories", budget.id),
              {data: arrayUnion({month: month, year: year, assigned: 0, available: prevAvail})}).catch((error) => {
              onError(error as never);
              budget.data = budget.data.filter((obj) => !(obj.month == month && obj.year == year));
              setState({state: [...newState]});
            })
          }
        }
      }
    },
  editBudget: (data: CategoryType, categoryId: string, groupId: string, db: Firestore, user: User, onSuccess: () => void, onError: (error: never) => void): Action<BudgetState> =>
    ({setState, getState}) => {
      const newState = [...getState().state];
      const group = newState.filter((obj) => obj.id == groupId)[0];
      const ind = getIndex(categoryId, group.children);
      const oldCategory = group.children[ind];
      group.children.splice(ind, 1, data);
      setState({state: newState});

      updateDoc(doc(db, user.uid, groupId, "categories", categoryId), {
        title: data.title,
        type: data.type,
        frequency: data.frequency,
        amount: data.amount,
        rawAmount: data.rawAmount,
        data: data.data
      }).then(() => {
        onSuccess();
      }).catch((error) => {
        onError(error as never);
        group.children.splice(ind, 1, oldCategory);
        setState({state: [...newState]});
      })
    }
}

const store = createStore<BudgetState, BudgetActions>({
  initialState,
  actions
})

export const useBudgetState = createStateHook(store)
export const useBudgetActions = createActionsHook(store)
