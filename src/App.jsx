import React from "react";
import ResponsiveAppBar from "./globalComponents/navbar/ResponsiveAppBar";
import ColorModeContext from "./globalComponents/theme/ColorModeContext";
import ResumeTemplate from "./pages/resume/ResumeTemplate";
import Home from "./pages/home/Home";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Link} from "@mui/material";


const App = () => {

    return (
        <ColorModeContext>
            <BrowserRouter>
                <ResponsiveAppBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="resume/" element={<ResumeTemplate />} />
                </Routes>
            </BrowserRouter>
        </ColorModeContext>
    );
};

export default App;