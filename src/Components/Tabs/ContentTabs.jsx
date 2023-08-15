import React from "react";
import Intro from "../Intro";
import style from "./Tabs.module.css";
import State from "../State";

const ContentTabs = ({ tabs, activeTab }) => {

    const activeTabTitle = tabs.find(tab => tab.id === activeTab).title;

    return (
        <main>
            <section className={style.section}>
                <h1 className={style.main_title}>
                    {activeTabTitle}
                </h1>
                { activeTabTitle === "Intro" && <Intro /> }
                { activeTabTitle === "State" && <State /> }
                { activeTabTitle === "Reducer & Context" }
                { activeTabTitle === "Refs" }
                { activeTabTitle === "Effect" }
                { activeTabTitle === "Routing" }
            </section>
        </main>
    )
}

export default ContentTabs;