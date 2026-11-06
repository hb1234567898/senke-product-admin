
import { Outlet } from "react-router";

import Header from "./components/Header.tsx";
import Sidebar from "./components/Sidebar.tsx";

export default function AppLayout() {
    return (
        <div className="app-layout">
            <Sidebar />

            <div className="app-shell">
                <Header />

                <main className="app-main">
                    <div className="page-container">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
