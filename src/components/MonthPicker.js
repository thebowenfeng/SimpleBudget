"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMonth = exports.useYear = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const icons_1 = require("@chakra-ui/icons");
const react_device_detect_1 = require("react-device-detect");
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const renderMonthYear = (month, year) => {
    return `${months[month]} - ${year.toString()}`;
};
function useYear() {
    const [year, setYear] = (0, react_2.useState)(new Date().getFullYear());
    return { year, setYear };
}
exports.useYear = useYear;
function useMonth() {
    const [month, setMonth] = (0, react_2.useState)(new Date().getMonth());
    return { month, setMonth };
}
exports.useMonth = useMonth;
function MonthPicker() {
    const [isOpen, setIsOpen] = (0, react_2.useState)(false);
    const { year, setYear } = useYear();
    const { month, setMonth } = useMonth();
    const forward = () => {
        setMonth((prev) => {
            switch (prev) {
                case 11:
                    setYear((prev2) => {
                        return prev2 + 1;
                    });
                    return 0;
                default:
                    return prev + 1;
            }
        });
    };
    const backward = () => {
        setMonth((prev) => {
            switch (prev) {
                case 0:
                    setYear((prev2) => {
                        return prev2 - 1;
                    });
                    return 11;
                default:
                    return prev - 1;
            }
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.IconButton, { "aria-label": 'back', icon: (0, jsx_runtime_1.jsx)(icons_1.ArrowBackIcon, {}), fontSize: react_device_detect_1.isMobile ? '3rem' : 'var(--chakra-fontSizes-md);', variant: 'ghost', onClick: backward }), (0, jsx_runtime_1.jsx)(react_1.Button, { variant: 'ghost', size: 'lg', fontSize: react_device_detect_1.isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);', onClick: () => setIsOpen(true), children: renderMonthYear(month, year) }), (0, jsx_runtime_1.jsx)(react_1.IconButton, { "aria-label": 'forward', icon: (0, jsx_runtime_1.jsx)(icons_1.ArrowForwardIcon, {}), fontSize: react_device_detect_1.isMobile ? '3rem' : 'var(--chakra-fontSizes-md);', variant: 'ghost', onClick: forward }), (0, jsx_runtime_1.jsxs)(react_1.Modal, { isOpen: isOpen, onClose: () => setIsOpen(false), isCentered: true, size: 'xl', children: [(0, jsx_runtime_1.jsx)(react_1.ModalOverlay, {}), (0, jsx_runtime_1.jsxs)(react_1.ModalContent, { height: react_device_detect_1.isMobile ? '30vh' : null, maxW: react_device_detect_1.isMobile ? '80vw' : null, children: [(0, jsx_runtime_1.jsxs)(react_1.ModalHeader, { sx: {
                                    display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: '20px',
                                    fontSize: react_device_detect_1.isMobile ? '3rem' : 'var(--chakra-fontSizes-xl);',
                                }, children: [(0, jsx_runtime_1.jsx)(react_1.IconButton, { "aria-label": 'back', icon: (0, jsx_runtime_1.jsx)(icons_1.ArrowBackIcon, {}), variant: 'ghost', onClick: () => setYear((curr) => curr - 1), fontSize: react_device_detect_1.isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);' }), year, (0, jsx_runtime_1.jsx)(react_1.IconButton, { "aria-label": 'forward', icon: (0, jsx_runtime_1.jsx)(icons_1.ArrowForwardIcon, {}), variant: 'ghost', onClick: () => setYear((curr) => curr + 1), fontSize: react_device_detect_1.isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);' })] }), (0, jsx_runtime_1.jsx)(react_1.ModalCloseButton, {}), (0, jsx_runtime_1.jsx)(react_1.ModalBody, { sx: {
                                    display: 'flex', flexDirection: 'row', flexWrap: 'wrap', columnGap: '10px',
                                    justifyContent: 'center', rowGap: '20px', marginBottom: '20px'
                                }, children: months.map((month) => {
                                    return ((0, jsx_runtime_1.jsx)(react_1.Button, { width: '30%', height: react_device_detect_1.isMobile ? '100px' : null, fontSize: react_device_detect_1.isMobile ? '2rem' : null, onClick: () => {
                                            setMonth(months.indexOf(month));
                                            setIsOpen(false);
                                        }, children: month }));
                                }) })] })] })] }));
}
exports.default = MonthPicker;
//# sourceMappingURL=MonthPicker.js.map