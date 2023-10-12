"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = require("@chakra-ui/react");
const Group_1 = __importDefault(require("./Group"));
const react_device_detect_1 = require("react-device-detect");
const react_2 = require("react");
const budgetStore_1 = require("../../stores/budgetStore");
require("./Animation.css");
const CreateGroupDrawer_1 = __importDefault(require("./CreateGroupDrawer"));
const ActionsBar = styled_components_1.default.div `
  height: ${react_device_detect_1.isMobile ? '100px' : '50px'};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
const ViewContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: ${react_device_detect_1.isMobile ? "calc(100vh - 560px)" : "calc(100vh - 150px)"};
  padding-bottom: 30px;
  scrollbar-gutter: stable;
`;
const LabelHeader = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${react_device_detect_1.isMobile ? '60px' : '30px'};
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  scrollbar-gutter: stable;
  overflow-y: scroll;
;
`;
const LabelContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: ${react_device_detect_1.isMobile ? '20vw' : '8vw'};
  min-width: ${react_device_detect_1.isMobile ? '200px' : '100px'};
  height: 100%;
`;
function randId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}
function genTempStore() {
    const a = [];
    for (let i = 0; i < 3; i++) {
        const b = [];
        for (let j = 0; j < 10; j++) {
            const newId = randId();
            b.push({ title: (i * 10 + j).toString(), id: newId, transitioning: false });
        }
        const newId = randId();
        a.push({ title: i.toString(), id: newId, children: b, transitioning: false });
    }
    return a;
}
function byId(id) {
    return document.getElementById(id);
}
function SpreadsheetView() {
    const dragState = (0, react_2.useRef)({ isMouseDown: false, draggedItem: null });
    const [displayChild, setDisplayChild] = (0, react_2.useState)(true);
    const [isCreateGroup, setIsCreateGroup] = (0, react_2.useState)(false);
    const budgetState = (0, budgetStore_1.useBudgetState)();
    const { loadBudget, swapGroup } = (0, budgetStore_1.useBudgetActions)();
    const onMouseUp = (event) => {
        event.stopPropagation();
        setDisplayChild(true);
        dragState.current.isMouseDown = false;
        if (dragState.current.draggedItem) {
            byId(dragState.current.draggedItem.id).style.border = null;
        }
        dragState.current.draggedItem = null;
    };
    const onMouseDown = (event) => {
        event.stopPropagation();
        dragState.current.isMouseDown = true;
    };
    const onMouseMoveFn = (event) => {
        event.stopPropagation();
        if (dragState.current.isMouseDown) {
            setDisplayChild(false);
            if (!dragState.current.draggedItem) {
                for (const groupItem of budgetState.state) {
                    if (byId(groupItem.id) && byId(groupItem.id).matches(":hover")) {
                        dragState.current.draggedItem = groupItem;
                        break;
                    }
                }
            }
            if (dragState.current.draggedItem) {
                byId(dragState.current.draggedItem.id).style.border = "2px solid blue";
                for (const group of budgetState.state) {
                    if (byId(group.id).matches(":hover") && group.id != dragState.current.draggedItem.id) {
                        swapGroup(group, dragState.current.draggedItem);
                    }
                }
                for (const group of budgetState.state) {
                    if (group.id != dragState.current.draggedItem.id) {
                        byId(group.id).style.border = null;
                    }
                }
            }
        }
    };
    (0, react_2.useEffect)(() => {
        loadBudget(genTempStore());
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(CreateGroupDrawer_1.default, { isOpen: isCreateGroup, onClose: () => { setIsCreateGroup(false); } }), (0, jsx_runtime_1.jsxs)(ActionsBar, { children: [(0, jsx_runtime_1.jsx)(react_1.Button, { variant: 'link', fontSize: react_device_detect_1.isMobile ? '2.5rem' : null, onClick: () => setIsCreateGroup(true), children: "Create group" }), (0, jsx_runtime_1.jsx)(react_1.Button, { sx: { marginLeft: 'auto' }, variant: 'link', fontSize: react_device_detect_1.isMobile ? '2.5rem' : null, children: "Delete group" })] }), (0, jsx_runtime_1.jsxs)(LabelHeader, { children: [(0, jsx_runtime_1.jsx)(LabelContainer, { children: (0, jsx_runtime_1.jsx)("h1", { style: { fontSize: react_device_detect_1.isMobile ? '1.75rem' : null }, id: "abc", children: "Available" }) }), (0, jsx_runtime_1.jsx)(LabelContainer, { children: (0, jsx_runtime_1.jsx)("h1", { style: { fontSize: react_device_detect_1.isMobile ? '1.75rem' : null }, id: "def", children: "Assigned" }) })] }), (0, jsx_runtime_1.jsx)(ViewContainer, { onMouseMove: onMouseMoveFn, children: budgetState.state.map((obj) => {
                    return ((0, jsx_runtime_1.jsx)(Group_1.default, { title: obj.title, assigned: 100, available: 80, id: obj.id, displayChild: displayChild }, obj.id));
                }) })] }));
}
exports.default = SpreadsheetView;
//# sourceMappingURL=SpreadsheetView.js.map