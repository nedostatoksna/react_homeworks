import React, { useState } from "react";
import NavTabs from "./NavTabs";
import ContentTabs from "./ContentTabs";

// сoстояние компонента
const tabs = [
    {
        id: 0,
        title: "Intro"
    },
    {
        id: 1,
        title: "State"
    },
    {
        id: 2,
        title: "Reducer & Context"
    },
    {
        id: 3,
        title: "Refs"
    },
    {
        id: 4,
        title: "Effect"
    },
    {
        id: 5,
        title: "Routing"
    }
]

const Tabs = () => {

    // const [ tabs, setTabs] = useState(tabsInitState); // инициализация состояния
     const [activeTab, setActiveTab] = useState(tabs[0].id);

    // мы хотим иметь навигационную панель с кнопками,
    //  которые будут переключать состояние компонента Tabs
    // navTabs - отдельный компонент
    // состояние влияет на активный таб 
    // переключение отображаемого контента
    // следовательно будет компонент ContentTabs

    return (
        <>
        <NavTabs 
            tabs={tabs}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
        />

        <ContentTabs 
            tabs={tabs} 
            activeTab={activeTab}
        />
        </>
    )
};

export default Tabs;