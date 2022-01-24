import { useContext } from "react";
import { MyContext } from "../../provider/provider";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartShop } from "./style";

export const ShopCart = () => {
    const { cart, showList, setShowList } = useContext(MyContext);

    return(
        <CartShop>
            {Object.keys(cart).length !== 0 &&
                <button onClick={() => setShowList(!showList)}>{Object.keys(cart).length}</button> 
            }
            <AiOutlineShoppingCart color="black" size={'2.5rem'} />
        </CartShop>
    )
};