"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const MonthPicker_1 = __importDefault(require("../components/MonthPicker"));
const react_device_detect_1 = require("react-device-detect");
const Spreadsheet_1 = require("../components/Spreadsheet");
const RootContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;
const Header = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  height: ${react_device_detect_1.isMobile ? '200px' : '100px'};
  min-height: ${react_device_detect_1.isMobile ? '200px' : '100px'};
  background-color: white;
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.19);
  clip-path: inset(-5px -5px -10px 0px);
`;
const HeaderContainer = styled_components_1.default.div `
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
function Budget() {
    return ((0, jsx_runtime_1.jsxs)(RootContainer, { children: [(0, jsx_runtime_1.jsxs)(Header, { children: [(0, jsx_runtime_1.jsx)(HeaderContainer, { children: (0, jsx_runtime_1.jsx)(MonthPicker_1.default, {}) }), (0, jsx_runtime_1.jsx)(HeaderContainer, { children: (0, jsx_runtime_1.jsx)("h1", { children: "Money" }) })] }), (0, jsx_runtime_1.jsx)(Body, { children: (0, jsx_runtime_1.jsx)(Spreadsheet_1.BudgetSection, {}) })] }));
}
exports.default = Budget;
//# sourceMappingURL=Budget.js.map