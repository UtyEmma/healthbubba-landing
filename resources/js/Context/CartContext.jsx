import { CartModal } from '@/Layouts/Partials/CartModal'
import {createContext, useContext, useEffect, useMemo, useState} from 'react'
import Cookies from 'universal-cookie'

const CartContext = createContext({
    items: [],
    add: (item) => {},
    remove: (id) => {},
    clear: () => {},
    total: 0
})

export const useCart = () => {
    return useContext(CartContext)
}

const cookies = new Cookies()

export default ({children}) => {

    const NAME = 'CART';

    const defaultItems = () => {
        let items = cookies.get(NAME)

        if(!items) items = [];

        cookies.set(NAME, items)
        return items;
    }

    const [items, setItems] = useState(defaultItems);
    const [item, setItem] = useState({});
    const [show, setShow] = useState(false);

    const total = useMemo(() => items.reduce((prev, carry) => prev + carry.test_package_price * carry.quantity, 0), [items])

    const add = (item, qty = 1, update = false) => {
        const existing = items.find(product => product.test_package_id == item.test_package_id)

        if(existing) {
            setItems((prev) => prev.map(product => {
                if(product.test_package_id == item.test_package_id) {
                    item.quantity = update ? qty : item.quantity + qty
                }

                return item
            }))
        }else{
            item.quantity = qty;
            setItems(prev => [...prev, item])
        }

        setShow(true);
        setItem(item)

        setTimeout(() => {
            setShow(false)
            setItem({})
        }, 7000)

    }

    const remove = (item) => {
        setItems(items.filter(value => value.test_package_id !== item.test_package_id))
    }

    const clear = () => setItems([])

    useEffect(() => {
        cookies.set(NAME, items);
    }, [items])

    return (
        <CartContext.Provider value={{
            add,
            remove,
            clear,
            items,
            total
        }}>
            {children}

            <CartModal {...{item, setItem, show, setShow}} />
        </CartContext.Provider>
    )
};
