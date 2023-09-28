import React, { useContext, useState } from "react";
import Intro from "../Intro";
import style from "./Tabs.module.css";
import State from "../State";
import ReducerAndContext from "../ReducerAndContext";
import Refs from "../Refs";
import Headers from "../../ui/Headers";
import { ThemeContext } from "../ReducerAndContext/ThemeSwitch/ThemeContext";
import Effect from "../Effect";

const ContentTabs = ({ tabs, activeTab }) => {

    const [theme, setTheme] = useState("light");

    const activeTabTitle = tabs.find(tab => tab.id === activeTab).title;

    return (
        <main>
            <section className={style.section}>
                <Headers>{activeTabTitle}</Headers>
                
                { activeTabTitle === "Intro" && <Intro /> }
                { activeTabTitle === "State" && <State /> }
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    { activeTabTitle === "Reducer & Context" && <ReducerAndContext /> }
                </ThemeContext.Provider>
                { activeTabTitle === "Refs" && <Refs /> }
                { activeTabTitle === "Effect" && <Effect /> }
                { activeTabTitle === "Routing" }
            </section>
        </main>
    )
}

export default ContentTabs;