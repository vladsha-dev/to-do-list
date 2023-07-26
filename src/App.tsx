import { ReactElement } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import WelcomePage from "./components/pages/WelcomePage"

const App = (): ReactElement => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomePage />} />
        </Routes>
    </BrowserRouter>
)

export default App
