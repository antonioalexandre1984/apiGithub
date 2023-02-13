import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";

export function Router() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
            </Route>
        </Routes>

    )
}