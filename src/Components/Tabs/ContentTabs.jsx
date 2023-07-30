import React from "react";
import Intro from "../Intro";
import style from "./Tabs.module.css";

const ContentTabs = ({ tabs, activeTab }) => {

    const activeTabTitle = tabs.find(tab => tab.id === activeTab).title;
    // подразумевается, что для каждого таба есть соотв контент 
    // и нам нужно разместить здесь условный рендеринг
    return (
        <main>
            <section className={style.section}>
                <h1 className={style.main_title}>
                    {activeTabTitle}
                </h1>
                { activeTabTitle === "Intro" && <Intro />}
                { activeTabTitle === "State" }
                { activeTabTitle === "Reducer & Context" }
                { activeTabTitle === "Refs" }
                { activeTabTitle === "Effect" }
                { activeTabTitle === "Routing" }
            </section>
        </main>
    )
}

export default ContentTabs;