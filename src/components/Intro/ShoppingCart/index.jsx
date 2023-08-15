import React from "react";
import style from "./ShoppingCart.module.css";
import ShoppingItem from "../ShoppingItem";
import initialProducts from "./InitialProdacts";
import { useState } from "react";

const ShoppingCart = () => {

    const [cardItems, setCardItems] = useState(initialProducts);

    const plus = id => {
        setCardItems(cardItems => {
          return cardItems.map(
            (item) => {
                if (item.id === id) {
                   return {...item, count : item.count + 1}
                }
                return item;
            }) 
        })
    }

    const minus = id => {
        setCardItems(cardItems => {
          return cardItems.map(
            (item) => {
                if (item.id === id) {
                   return {...item, count : item.count - 1}
                }
                return item;
            }) 
        })
    }

    return (
        <>
        <section className={style.shopping_cart} >
            <h1 className={style.sub_title}>
                Middle
            </h1>
            <ul className={style.shopping_cart_box}>
                {
                    cardItems.map( card => (
                        card.count > 0 && (
                            <li className={style.item_box} key={card.id}>
                                <div className={style.item}>
                                    <ShoppingItem 
                                        item={card}
                                        plus={() => plus(card.id)}
                                        minus={() => minus(card.id)}
                                    />
                                </div>
                            </li>
                        )
                    ))
                }
            </ul>
        </section>
        </>
    )
};

export default ShoppingCart;