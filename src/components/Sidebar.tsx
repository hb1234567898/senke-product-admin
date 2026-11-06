import './Sidebar.css'
import { NavLink } from "react-router";
import { LayoutDashboard, Bike } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className={'app-sidebar'}>
            <div className={'sidebar-brand'}>
                <h1>SENKE</h1>
                <p>PRODUCT ADMIN</p>
            </div>
            <nav className={'sidebar-menu'}>
                <NavLink to={'/'} end className={'sidebar-item'} >
                    <LayoutDashboard size={19}></LayoutDashboard>
                    <span>工作台</span>
                </NavLink>
                <NavLink to={'/products'} end className={'sidebar-item'} >
                    <Bike size={19}></Bike>
                    <span>产品管理</span>
                </NavLink>
            </nav>
            <div className="sidebar-footer">
                SENKE 管理系统
            </div>
        </aside>
    );
}
