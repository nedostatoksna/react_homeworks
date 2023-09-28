import React from "react";
import Buttons from "../../../ui/Button";

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