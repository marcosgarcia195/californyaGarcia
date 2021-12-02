import {createContext, useState} from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = [], children}) => {

    const [items, setItems] = useState(defaultValue);
    const [quantity, setQuantity] = useState(0)

    const addItem = (currentItem) => {

        if (items.some(({item}) => item.id === currentItem.item.id)){

            const item = items.find(({item}) => item.id === currentItem.item.id)
            item.quantity = item.quantity + currentItem.quantity;
        }
        else{

            setItems([...items, currentItem]);
        }
        
        setQuantity(quantity + currentItem.quantity);
    };

    const removeItem = (currentItem) => {

        if (items.some(({item}) => item.id === currentItem.item.id)){

            const newItems = items.filter(({item}) => item.id !== currentItem.item.id);
            setItems([...newItems]);

            setQuantity(quantity - currentItem.quantity);
        }
        
    };

    const clear = (currentItem) => { 
        setItems([]);
        setQuantity(0);
    }

    /*const isInCart = (id) => { 
      
        let exist = false;

        if(items.find(({item}) => item.id === id)){

            exist = true;
        }

        return exist;
    }*/

    return <CartContext.Provider value={{items,quantity,addItem,removeItem,clear}}>{children}</CartContext.Provider>

};