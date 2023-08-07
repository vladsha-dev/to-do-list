import { responsiveFontSizes, createTheme, ThemeProvider } from "@mui/material";
import { ReactElement, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ListsPageComponent } from "./routes/listsPage";
import { WelcomePageComponent } from "./routes/welcomePage";
import { themeConf } from "./utils/theme";

let theme = createTheme(themeConf);
theme = responsiveFontSizes(theme);

const App = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Suspense fallback={<>LOADING...</>}>
                <Routes>
                    <Route path="/" element={<WelcomePageComponent />} />
                    <Route path="lists" element={<ListsPageComponent />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
