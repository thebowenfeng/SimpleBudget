"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const config_1 = require("./config");
const react_1 = require("@chakra-ui/react");
const RootContainer = styled_components_1.default.div `
  width: 100vw;
  height: 200px;
  position: absolute;
  bottom: 0;
  box-shadow: 5px 0 12px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
const NavBarEntryContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${Math.round(100 / config_1.navBarItems.length) + 'vw'};
`;
function NavBarMobile() {
    return ((0, jsx_runtime_1.jsx)(RootContainer, { children: config_1.navBarItems.map((obj) => {
            return ((0, jsx_runtime_1.jsxs)(NavBarEntryContainer, { children: [(0, jsx_runtime_1.jsx)(react_1.IconButton, { "aria-label": obj.title, icon: obj.icon, variant: 'ghost', height: '100px', width: '100px', fontSize: '100px' }), (0, jsx_runtime_1.jsx)(react_1.Heading, { children: obj.title })] }));
        }) }));
}
exports.default = NavBarMobile;
//# sourceMappingURL=NavBarMobile.js.map