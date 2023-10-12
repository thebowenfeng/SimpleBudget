"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = require("@chakra-ui/react");
const RootWrapper = styled_components_1.default.div `
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function GenericLoading() {
    return ((0, jsx_runtime_1.jsx)(RootWrapper, { children: (0, jsx_runtime_1.jsx)(react_1.CircularProgress, { isIndeterminate: true, size: '100px' }) }));
}
exports.default = GenericLoading;
//# sourceMappingURL=GenericLoading.js.map