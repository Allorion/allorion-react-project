import React from "react";
import {IconButton} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import {useColorMode} from "./ColorModeContext";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ToggleColorMode() {

    const theme = useTheme();
    const {colorMode} = useColorMode();

    return(
        <>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </>
    );
};