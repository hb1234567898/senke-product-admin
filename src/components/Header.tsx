
import { useLocation } from "react-router";
import { Bell, CircleUserRound } from "lucide-react";

export default function Header() {
    const { pathname } = useLocation();

    const pageName =
        pathname === "/" ? "工作台" :
            pathname.startsWith("/products") ? "产品管理" :
                "管理系统";

    return (
        <header className="app-header">
            <div className="header-breadcrumb">
                <span>工作台</span>
                {pathname !== "/" && (
                    <>
                        <span>/</span>
                        <span>{pageName}</span>
                    </>
                )}
            </div>

            <div className="header-actions">
                <Bell size={20} />
                <CircleUserRound size={28} />
            </div>
        </header>
    );
}
