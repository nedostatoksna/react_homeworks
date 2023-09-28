import React from "react";
import style from "./PackingList.module.css";

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
                            <div>
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
                                className={style.task_btn}
                                onClick={() => onDeleteItem(item)}
                            >
                                delete
                            </button>
                        </li>

                    ))
                }

            </ul>     
        </>
    )
} 

export default List;