import React, { useRef, useState } from "react";
import style from "./Debounced.module.css";

const Dish = ({ item }) => {

    const [isPreparing, setIsPreparing] = useState(false);
    const dishRef = useRef(null);

    const handlePreparing = (name) => {
        setIsPreparing(true);
        clearTimeout( dishRef.current);
        dishRef.current = setTimeout(() => {
            alert(name + ' is ready!');
            setIsPreparing(false);
        }, 3000);
    };

    const handleCancel = () => {
        setIsPreparing(false);
        clearTimeout(dishRef.current);
    };
 
    return (
        <>
            <div className={style.dish_box}>
                <button
                    className={style.task_btn}
                    disabled={isPreparing}
                    onClick={() => handlePreparing(item.name)}
                >
                    Prepare {item.name}
                </button>
                {isPreparing ? 'Preparing...' : ''}
                {isPreparing && (<button 
                                    className={style.task_btn}
                                    onClick={handleCancel}
                                >
                                    Cancel 
                                </button>)}
            </div>
        </>
    )
}

export default Dish;