"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const icons_1 = require("@chakra-ui/icons");
const bs_1 = require("react-icons/bs");
const config_1 = require("./config");
const RootWrapper = styled_components_1.styled.div `
  height: 100vh;
  transition: width 1s ease;
  box-shadow: 5px 0 12px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`;
const slideRight = (0, styled_components_1.keyframes) `
  0% {
    clip-path: inset(0 44% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;
function NavBarDesktop() {
    const [expand, setExpand] = (0, react_1.useState)(false);
    const NarBarEntry = (props) => {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!expand && (0, jsx_runtime_1.jsx)(react_2.IconButton, { "aria-label": props.label, icon: props.icon, variant: "ghost" }), expand && (0, jsx_runtime_1.jsxs)(react_2.Button, { variant: "ghost", children: [props.icon, props.label] })] }));
    };
    const AppTitle = () => {
        const HeadingWrapper = styled_components_1.styled.div `
      width: 180px;
      text-align: center;
      animation: ${slideRight} 1s ease
    `;
        return ((0, jsx_runtime_1.jsx)(HeadingWrapper, { children: (0, jsx_runtime_1.jsx)(react_2.Heading, { fontSize: '1.5rem', sx: { marginBottom: '10px' }, children: "Simple Budget" }) }));
    };
    return ((0, jsx_runtime_1.jsxs)(RootWrapper, { style: { width: expand ? '180px' : '80px' }, children: [!expand && (0, jsx_runtime_1.jsx)(icons_1.Icon, { boxSize: 30, as: bs_1.BsFillBootstrapFill, sx: { marginBottom: '10px' } }), expand && (0, jsx_runtime_1.jsx)(AppTitle, {}), config_1.navBarItems.map((obj) => {
                return ((0, jsx_runtime_1.jsx)(NarBarEntry, { label: obj.title, icon: obj.icon }));
            }), (0, jsx_runtime_1.jsx)(react_2.IconButton, { icon: expand ? (0, jsx_runtime_1.jsx)(icons_1.ArrowLeftIcon, {}) : (0, jsx_runtime_1.jsx)(icons_1.ArrowRightIcon, {}), onClick: () => { setExpand(!expand); }, sx: { marginTop: 'auto', marginBottom: '10px' }, "aria-label": "Expand", variant: 'ghost' })] }));
}
exports.default = NavBarDesktop;
//# sourceMappingURL=NavBarDesktop.js.map