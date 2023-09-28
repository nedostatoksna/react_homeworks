import React, { useContext} from "react";
import style from "./Theme.module.css";
import SubHeaders from "../../../ui/Headers/SubHeaders";
import { ThemeContext } from "./ThemeContext";

const ThemeSwither = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const switchTheme = () => {
        setTheme(
            (theme === "light")
             ? "lilac" 
             : "light");
    };

    return (
        <div className={theme === 'lilac' ? style.lilac_wrapper : style.light_wrapper}>
            <section className={style.section}>
                <SubHeaders>Theme Swither</SubHeaders>
                    <label className={style.theme_switch_wrapper}>
                        <input
                            className={style.input}
                            type="checkbox"
                            checked={theme === "lilac"}
                            onChange={switchTheme}
                        />
                        <span>Change theme to {theme === "light" ? "Lilac" : "Light"}</span>
                    </label>
            </section>
        </div>
    )
};

export default ThemeSwither;