import React from "react";
import style from "./State.module.css";

const List = ({ items, onDeleteItem, onPackedItem }) => {

    return (
        <>
            <ul className={style.list_wrapper}>
                {
                    items.map(item => (
                        <li 
                            key={item.id}
                            className={style.item_box}
                        >
                            <div className={style.check_and_title_box}>
                            <input 
                            key={item.id}
                                type="checkbox"
                                className={style.list_checkbox}
                                onChange={() => onPackedItem({...item, packed: !item.packed})}
                                checked={item.packed}
                                id={item.id}
                            />
                            {item.title}
                            </div>
                            <button 
                                className={`${style.btn} ${style.btn_delete}`}
                                onClick={() => onDeleteItem(item)}
                            >
                                Delete
                            </button>
                        </li>

                    ))
                }

            </ul>     
        </>
    )
} 

export default List;