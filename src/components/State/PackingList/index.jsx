import React from "react";
import style from "./PackingList.module.css";
import { useState } from "react";
import initialItems from "./InitialItems";
import AddItem from "./AddItem";
import List from "./List";
import SubHeaders from "../../../ui/Headers/SubHeaders";

let nextId = 3;

const PackingList = () => {

    const [items, setItems] = useState(initialItems);
    const [total, setTotal] = useState(3);
    const [packed, setPacked] = useState(1);

    const handleAddItem = (title) => {
        setTotal(total + 1);
        const newItem =  { 
                            id: nextId++,
                            title: title,
                            packed: false };

        setItems([...items, newItem]);

        nextId = nextId++;
    };

    const handleDeleteItem = (itemDeleted) => {
        setTotal(total - 1);
        setItems(
            items.filter((item) => item.id !== itemDeleted.id)
        );
        if (itemDeleted.packed) {
            setPacked(packed - 1);
        }
    };

    function handlePackedItem(packedItem) {
        if (packedItem.packed) {
            setPacked(packed + 1);
        } else {
            setPacked(packed - 1);
        }
        setItems(
            items.map((item) => {
                if (item.id === packedItem.id) {
                    return packedItem;
                } else {
                    return item;
                }
            })
        );
    };

    return (
        <>
            <section className={style.section}>
                <SubHeaders>Packing List</SubHeaders>
                <AddItem onAddItem={handleAddItem} />
                <List 
                    items={items}
                    onDeleteItem={handleDeleteItem}
                    onPackedItem={handlePackedItem}
                />
                <p className={style.p_color}>{packed} out of {total} packed!</p>

            </section>
        </>
    )
} 

export default PackingList;