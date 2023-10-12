"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const firebaseConfig_json_1 = __importDefault(require("./firebaseConfig.json"));
const app_1 = require("firebase/app");
const react_1 = require("@chakra-ui/react");
const FirebaseContext_1 = require("./contexts/FirebaseContext");
const Login_1 = __importDefault(require("./pages/Login"));
const auth_1 = require("firebase/auth");
const react_2 = require("react");
const GenericLoading_1 = __importDefault(require("./pages/GenericLoading"));
const react_device_detect_1 = require("react-device-detect");
const styled_components_1 = require("styled-components");
const NavBar_1 = require("./components/NavBar");
const Budget_1 = __importDefault(require("./pages/Budget"));
const RootWrapper = styled_components_1.styled.div `
  display: flex;
  flex-direction: ${react_device_detect_1.isMobile ? 'column' : 'row'};
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
`;
function App() {
    const config = firebaseConfig_json_1.default.result.sdkConfig;
    const app = (0, app_1.initializeApp)(config);
    const auth = (0, auth_1.getAuth)();
    const [page, setPage] = (0, react_2.useState)("undefined");
    (0, react_2.useEffect)(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // Invalidates session after a day
                if (new Date().getTime() - new Date(user.metadata.lastSignInTime).getTime() > 86400000) {
                    (0, auth_1.signOut)(auth).then(() => {
                        setPage("login");
                    }).catch((error) => {
                        alert(`${error.code}: ${error.message}. Please refresh your page.`);
                        setPage("undefined");
                    });
                }
                setPage("budget");
            }
            else {
                setPage("login");
            }
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_1.ChakraProvider, { toastOptions: { defaultOptions: {
                position: 'top-right',
                containerStyle: {
                    fontSize: react_device_detect_1.isMobile ? "2rem" : 'auto',
                }
            } }, children: (0, jsx_runtime_1.jsxs)(FirebaseContext_1.FirebaseContext.Provider, { value: app, children: [page == "undefined" && (0, jsx_runtime_1.jsx)(GenericLoading_1.default, {}), page == "login" && (0, jsx_runtime_1.jsx)(Login_1.default, {}), (page != "login" && page != "undefined") &&
                    (0, jsx_runtime_1.jsxs)(RootWrapper, { children: [!react_device_detect_1.isMobile && (0, jsx_runtime_1.jsx)(NavBar_1.NBDesktop, {}), page == "budget" && (0, jsx_runtime_1.jsx)(Budget_1.default, {}), react_device_detect_1.isMobile && (0, jsx_runtime_1.jsx)(NavBar_1.NBMobile, {})] })] }) }));
}
exports.App = App;
//# sourceMappingURL=App.js.map