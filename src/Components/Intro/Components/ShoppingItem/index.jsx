import React from "react";
import Buttons from "../Buttons";

const ShoppingItem = ({item, plus, minus}) => {
    
    return (
        <>
            <p>{item.name} (<b>{item.count}</b>)</p>
            <Buttons onClickHandler={plus} >+</Buttons>
            <Buttons onClickHandler={minus}>-</Buttons>
        </>
    )
};

export default ShoppingItem;