import React from "react";
import style from "./Tabs.module.css";

const NavTabs = ({ tabs, activeTab, setActiveTab }) => {
 

    return (
        <nav className={style.nav}>
            {
                tabs.map(tab => (
                    <button className={
                        activeTab === tab.id ? style.active : style.tab
                    } 
                    key={tab.id} 
                    onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))
            }
        </nav>
    )
}

export default NavTabs;