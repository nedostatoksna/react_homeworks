import React, { useRef } from "react";
import style from "./Scroll.module.css";
import SubHeaders from "../../../ui/Headers/SubHeaders";
import { articles } from "./articles";

const Scroll = () => {
    const articleRef = useRef([]);
    const navRef = useRef(null);

    const handleScrollArticle = (id) => {
        const node = articleRef.current.find(node => node.id == id);;
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    };

    const handleScrollToNav = () => {
        const node = navRef.current;
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    };
 
    return (
        <>
            <section className={style.section}>
                <SubHeaders>Scroll Nav</SubHeaders>
                <nav className={style.nav_box} ref={navRef}>
                    <h2>Navigation:</h2>
                    {
                        articles.map(article => (
                        <button
                            className={style.nav_btn}
                            key={article.id} 
                            id={article.id}
                            onClick={() => handleScrollArticle(article.id)}
                        >
                            {article.header}
                        </button>
                        ))
                    }
                </nav>
                <div className={style.articles_box}>
                    <h2>Articles:</h2>
                    {
                        articles.map(article => (
                            <article 
                                key={article.id} 
                                id={article.id}
                                ref={
                                    (node) => {
                                      if (!articleRef.current.find(item => item.id == article.id)) {
                                        articleRef.current.push(node)
                                      }
                                  }
                                }
                            >
                                <h3 className={style.article_header}>{article.header}</h3>
                                <p className={style.article_text}>{article.contence}</p>
                                <button 
                                    className={style.nav_btn}
                                    onClick={() => handleScrollToNav()}
                                >
                                    Scroll to Nav
                                </button>
                            </article>
                        ))
                    }

                </div>
            </section>
        </>
    )
}

export default Scroll;