"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const react_device_detect_1 = require("react-device-detect");
const Group_1 = require("./Group");
const react_1 = require("@chakra-ui/react");
const RootContainer = styled_components_1.styled.div `
  display: flex;
  flex-direction: row;
  height: ${react_device_detect_1.isMobile ? '80px' : '40px'};
  min-height: ${react_device_detect_1.isMobile ? '80px' : '40px'};
  width: 100%;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: -1px;
  padding-right: 20px;
  padding-left: 55px;
  user-select: none;
  transition: top 1s linear;
`;
const ProgressContainer = styled_components_1.styled.div `
  margin-left: 3vw;
  width: 30vw;
`;
function Category(props) {
    return ((0, jsx_runtime_1.jsxs)(RootContainer, { id: props.id, children: [(0, jsx_runtime_1.jsx)("h1", { style: { fontSize: react_device_detect_1.isMobile ? '2rem' : '1.1rem' }, children: props.title }), (0, jsx_runtime_1.jsx)(ProgressContainer, { children: (0, jsx_runtime_1.jsx)(react_1.Progress, { value: 80, sx: { borderRadius: '50px' } }) }), (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'row', marginLeft: 'auto' }, children: [(0, jsx_runtime_1.jsx)(Group_1.LabelContainer, { children: (0, jsx_runtime_1.jsx)("h1", { style: { fontSize: react_device_detect_1.isMobile ? '1.75rem' : null }, children: "$100" }) }), (0, jsx_runtime_1.jsx)(Group_1.LabelContainer, { children: (0, jsx_runtime_1.jsx)("h1", { style: { fontSize: react_device_detect_1.isMobile ? '1.75rem' : null }, children: "$100" }) })] })] }));
}
exports.default = Category;
//# sourceMappingURL=Category.js.map