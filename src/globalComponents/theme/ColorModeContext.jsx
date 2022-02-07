import React, {createContext, useContext, useMemo, useState} from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useTheme} from '@mui/material/styles';

const ColorModeContext = createContext(undefined);

export const useColorMode = () => {
    return useContext(ColorModeContext);
};

export default function ColorMode({children}) {
    const theme1 = useTheme();
    const cookieTheme = document.cookie.match('(^|;) ?theme=([^;]*)(;|$)')

    const [mode, setMode] = useState(cookieTheme[2]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    useMemo(() => {
        document.cookie = `theme=${mode}`;
    }, [mode]);

    document.body.style.backgroundColor = theme.palette.background.default;

    return (
        <ColorModeContext.Provider value={{
            visible: mode,
            colorMode,
            theme1
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}