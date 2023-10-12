"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBudgetActions = exports.useBudgetState = exports.actions = void 0;
const react_sweet_state_1 = require("react-sweet-state");
require("../components/Spreadsheet/Animation.css");
function getIndex(id, lst) {
    for (let i = 0; i < lst.length; i++) {
        const item = lst[i];
        if (item.id == id) {
            return i;
        }
    }
    return 9999;
}
function findObj(id, lst) {
    for (const item of lst) {
        if (item.id == id) {
            return item;
        }
    }
}
function addAnimation(index1, index2, id1, id2) {
    if (document.getElementById(id1) && document.getElementById(id2)) {
        document.getElementById(id1).style.animation = "slide-animation 0.3s ease";
        document.getElementById(id2).style.animation = "slide-animation 0.3s ease";
        document.getElementById(id1).style.setProperty('--m', `${(index2 - index1) * 40}px`);
        document.getElementById(id2).style.setProperty('--m', `${(index1 - index2) * 40}px`);
    }
}
function removeAnimation(item1, item2) {
    if (document.getElementById(item1.id) && document.getElementById(item2.id)) {
        document.getElementById(item1.id).style.animation = null;
        document.getElementById(item2.id).style.animation = null;
        item1.transitioning = false;
        item2.transitioning = false;
    }
}
const initialState = {
    state: []
};
exports.actions = {
    loadBudget: (data) => ({ setState }) => {
        setState({ state: data });
    },
    swapGroup: (item1, item2) => ({ setState, getState }) => {
        if (!item1.transitioning && !item2.transitioning) {
            item1.transitioning = true;
            item2.transitioning = true;
            const newState = [...getState().state];
            const index1 = getIndex(item1.id, newState);
            const index2 = getIndex(item2.id, newState);
            addAnimation(index1, index2, item1.id, item2.id);
            newState[index1] = item2;
            newState[index2] = item1;
            setTimeout(() => {
                removeAnimation(item1, item2);
                setState({ state: newState });
            }, 250);
        }
    },
    swapCategory: (groupId, item1, item2) => ({ setState, getState }) => {
        if (!item1.transitioning && !item2.transitioning) {
            item1.transitioning = true;
            item2.transitioning = true;
            const newState = [...getState().state];
            const group = findObj(groupId, newState);
            const newChildrenState = [...group.children];
            const index1 = getIndex(item1.id, newChildrenState);
            const index2 = getIndex(item2.id, newChildrenState);
            addAnimation(index1, index2, item1.id, item2.id);
            newChildrenState[index1] = item2;
            newChildrenState[index2] = item1;
            group.children = newChildrenState;
            setTimeout(() => {
                removeAnimation(item1, item2);
                setState({ state: newState });
            }, 250);
        }
    }
};
const store = (0, react_sweet_state_1.createStore)({
    initialState,
    actions: exports.actions
});
exports.useBudgetState = (0, react_sweet_state_1.createStateHook)(store);
exports.useBudgetActions = (0, react_sweet_state_1.createActionsHook)(store);
//# sourceMappingURL=budgetStore.js.map