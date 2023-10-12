"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const react_device_detect_1 = require("react-device-detect");
const DrawerOverlay = styled_components_1.default.div `
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.58);
`;
const slideLeft = (0, styled_components_1.keyframes) `
  0% {
    clip-path: inset(0 0 0 100%);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;
const slideUp = (0, styled_components_1.keyframes) `
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;
const DrawerDesktop = styled_components_1.default.div `
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: white;
  z-index: 20;
  animation: ${slideLeft} 1s ease;
`;
const DrawerMobile = styled_components_1.default.div `
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 20;
  animation: ${slideUp} 1s ease;
`;
function CreateGroupDrawer(props) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [props.isOpen && (0, jsx_runtime_1.jsx)(DrawerOverlay, { onClick: props.onClose }), props.isOpen && !react_device_detect_1.isMobile && (0, jsx_runtime_1.jsx)(DrawerDesktop, {}), props.isOpen && react_device_detect_1.isMobile && (0, jsx_runtime_1.jsx)(DrawerMobile, {})] }));
}
exports.default = CreateGroupDrawer;
//# sourceMappingURL=CreateGroupDrawer.js.map