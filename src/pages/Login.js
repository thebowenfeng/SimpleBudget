"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const auth_1 = require("firebase/auth");
const react_device_detect_1 = require("react-device-detect");
const RootWrapper = styled_components_1.default.div `
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const LoginWrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  row-gap: ${react_device_detect_1.isMobile ? '40px' : '20px'};
  width: ${react_device_detect_1.isMobile ? "75vw" : "35vw"};
  min-width: 500px;
  align-items: center;
  justify-content: center;
  border: 1px solid #b4b3b3;
  padding: 50px;
  border-radius: 30px;
`;
function Login() {
    const [show, useShow] = (0, react_2.useState)(false);
    const emailRef = (0, react_2.useRef)();
    const pswdRef = (0, react_2.useRef)();
    const toast = (0, react_1.useToast)();
    const auth = (0, auth_1.getAuth)();
    const showToast = (title, type, description) => {
        toast({
            title: title,
            description: description,
            status: type,
            duration: 3000,
            isClosable: true
        });
    };
    const onLogin = () => {
        if (emailRef.current && pswdRef.current) {
            if (emailRef.current.value == '') {
                showToast("Empty email", 'error');
            }
            else if (pswdRef.current.value == '') {
                showToast("Empty password", "error");
            }
            else {
                (0, auth_1.setPersistence)(auth, auth_1.browserLocalPersistence).then(() => {
                    (0, auth_1.signInWithEmailAndPassword)(auth, emailRef.current.value, pswdRef.current.value).then((userCreds) => {
                        showToast("Login success", "success");
                    }).catch((error) => {
                        showToast(error.code, "error", error.message);
                    });
                }).catch((error) => {
                    showToast(error.code, "error", error.message);
                });
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)(RootWrapper, { children: (0, jsx_runtime_1.jsxs)(LoginWrapper, { children: [(0, jsx_runtime_1.jsx)("h1", { style: { fontSize: react_device_detect_1.isMobile ? "5em" : "2em" }, children: "Login" }), (0, jsx_runtime_1.jsx)(react_1.Input, { placeholder: "Email", size: "lg", ref: emailRef, height: react_device_detect_1.isMobile ? "80px" : 'var(--input-height)', sx: { fontSize: react_device_detect_1.isMobile ? "2.5rem" : "--input-font-size" } }), (0, jsx_runtime_1.jsxs)(react_1.InputGroup, { size: 'md', children: [(0, jsx_runtime_1.jsx)(react_1.Input, { size: 'lg', type: show ? 'text' : 'password', placeholder: 'Enter password', ref: pswdRef, height: react_device_detect_1.isMobile ? "80px" : 'var(--input-height)', sx: { fontSize: react_device_detect_1.isMobile ? "2.5rem" : "--input-font-size" } }), (0, jsx_runtime_1.jsx)(react_1.InputRightElement, { width: '4.5rem', top: react_device_detect_1.isMobile ? '20px' : '4px', children: (0, jsx_runtime_1.jsx)(react_1.Button, { h: react_device_detect_1.isMobile ? '4rem' : '2rem', size: react_device_detect_1.isMobile ? 'lg' : 'sm', onClick: () => useShow((prev) => !prev), children: show ? 'Hide' : 'Show' }) })] }), (0, jsx_runtime_1.jsx)(react_1.Button, { size: "lg", onClick: onLogin, sx: {
                        height: react_device_detect_1.isMobile ? "100px" : "var(--chakra-sizes-12)",
                        width: react_device_detect_1.isMobile ? "200px" : "var(--chakra-sizes-20)",
                        fontSize: react_device_detect_1.isMobile ? "3rem" : "var(--chakra-fontSizes-lg)"
                    }, children: "Login" })] }) }));
}
exports.default = Login;
//# sourceMappingURL=Login.js.map