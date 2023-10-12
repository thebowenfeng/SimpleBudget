"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const icons_1 = require("@chakra-ui/icons");
const react_device_detect_1 = require("react-device-detect");
const Category_1 = __importDefault(require("./Category"));
const budgetStore_1 = require("../../stores/budgetStore");
require("./Animation.css");
const Header = styled_components_1.styled.div `
  display: flex;
  flex-direction: row;
  height: ${react_device_detect_1.isMobile ? '80px' : '40px'};
  min-height: ${react_device_detect_1.isMobile ? '80px' : '40px'};
  width: 100%;
  align-items: center;
  background-color: rgba(215, 215, 215, 1);
  padding-right: 20px;
  padding-left: 20px;
  user-select: none;
`;
exports.LabelContainer = styled_components_1.styled.div `
  width: ${react_device_detect_1.isMobile ? '20vw' : '8vw'};
  min-width: ${react_device_detect_1.isMobile ? '200px' : '100px'};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const ChildrenContainer = styled_components_1.styled.div `
  display: flex;
  flex-direction: column;
  transition: max-height 0.5s linear, min-height 0.5s linear;
  overflow: hidden;
`;
function getChildren(groupId, state) {
    for (const group of state.state) {
        if (group.id == groupId) {
            return group.children;
        }
    }
}
function byId(id) {
    return document.getElementById(id);
}
function Group(props) {
    const [isFolded, setIsFolded] = (0, react_2.useState)(false);
    const dragState = (0, react_2.useRef)({ isMouseDown: false, draggedItem: null });
    const budgetState = (0, budgetStore_1.useBudgetState)();
    const { swapCategory } = (0, budgetStore_1.useBudgetActions)();
    const maxChildrenHeight = getChildren(props.id, budgetState).length * (react_device_detect_1.isMobile ? 80 : 40);
    const onMouseUp = (event) => {
        event.stopPropagation();
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
            if (!dragState.current.draggedItem) {
                for (const categoryItem of getChildren(props.id, budgetState)) {
                    if (byId(categoryItem.id) && byId(categoryItem.id).matches(":hover")) {
                        dragState.current.draggedItem = categoryItem;
                        break;
                    }
                }
            }
            if (dragState.current.draggedItem) {
                byId(dragState.current.draggedItem.id).style.border = "2px solid blue";
                for (const categoryItem of getChildren(props.id, budgetState)) {
                    if (byId(categoryItem.id).matches(":hover") && categoryItem.id != dragState.current.draggedItem.id) {
                        swapCategory(props.id, categoryItem, dragState.current.draggedItem);
                    }
                }
                for (const categoryItem of getChildren(props.id, budgetState)) {
                    if (categoryItem.id != dragState.current.draggedItem.id) {
                        byId(categoryItem.id).style.border = null;
                    }
                }
            }
        }
    };
    const adjustHeight = () => {
        if (props.displayChild && !isFolded) {
            return `${maxChildrenHeight}px`;
        }
        else {
            return '0px';
        }
    };
    (0, react_2.useEffect)(() => {
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Header, { id: props.id, children: [props.displayChild && (0, jsx_runtime_1.jsx)(react_1.IconButton, { "aria-label": 'fold', icon: isFolded ? (0, jsx_runtime_1.jsx)(icons_1.ArrowForwardIcon, {}) : (0, jsx_runtime_1.jsx)(icons_1.ArrowDownIcon, {}), onClick: () => { setIsFolded(!isFolded); }, variant: 'link', fontSize: react_device_detect_1.isMobile ? '30px' : null }), (0, jsx_runtime_1.jsx)(react_1.Heading, { fontSize: react_device_detect_1.isMobile ? '30px' : '20px', children: props.title }), (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'row', marginLeft: 'auto' }, children: [(0, jsx_runtime_1.jsx)(exports.LabelContainer, { children: (0, jsx_runtime_1.jsxs)("h1", { style: { fontSize: react_device_detect_1.isMobile ? '1.75rem' : null }, children: ["$", props.available] }) }), (0, jsx_runtime_1.jsx)(exports.LabelContainer, { children: (0, jsx_runtime_1.jsxs)("h1", { style: { fontSize: react_device_detect_1.isMobile ? '1.75rem' : null }, children: ["$", props.assigned] }) })] })] }), props.displayChild &&
                (0, jsx_runtime_1.jsx)(ChildrenContainer, { style: {
                        minHeight: adjustHeight(),
                        maxHeight: adjustHeight(),
                    }, onMouseMove: onMouseMoveFn, children: getChildren(props.id, budgetState).map((obj) => {
                        return ((0, jsx_runtime_1.jsx)(Category_1.default, { title: obj.title, id: obj.id }, obj.id));
                    }) })] }));
}
exports.default = Group;
//# sourceMappingURL=Group.js.map