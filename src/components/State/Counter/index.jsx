import React from "react";
import style from "./Counter.module.css";
import { useState } from "react";
import SubHeaders from "../../../ui/Headers/SubHeaders";

const Counter = () => {
    
    const [plusNumber, setPlusNumber] = useState(1);
    const [minusNumber, setMinusNumber] = useState(1);
    const [counter, setCounter] = useState(0);

    const countPlus = (e) => {
        console.log(plusNumber);
        setCounter(counter + plusNumber);
    };

    const countMinus = (e) => {
        console.log(minusNumber);
        setCounter(counter - minusNumber);
    };

    return (
        <>
            <section className={style.section}>
                <SubHeaders>Castom counter</SubHeaders>
                <div className={style.btns_wrapper}>
                    <button 
                        className={style.btn}
                        onClick={(e) => countPlus(e)}
                    >
                        +{plusNumber}
                    </button>
                    <input className={style.counter_input} disabled value={counter} />
                    <button 
                        className={style.btn}
                        onClick={(e) => countMinus(e)}
                    >
                        -{minusNumber}
                    </button>
                </div>
                <div className={style.inputs_wrapper}>
                    <label className={style.label_for_input}>Plus counter: 
                        <input 
                            className={style.input_color} 
                            value={plusNumber} 
                            onChange={(e) => setPlusNumber(Number(e.target.value))}
                        />
                    </label>
                    <br></br>
                    <label className={style.label_for_input}>Minus counter: 
                        <input 
                               className={style.input_color} 
                               value={minusNumber} 
                               onChange={(e) => setMinusNumber(Number(e.target.value))}
                        />
                    </label>
                </div>
            </section>
        
        </>
    )
}
export default Counter;