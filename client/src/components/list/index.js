import { useContext } from "react";
import { MyContext } from "../../provider/provider";
import { ListItem, ListSection } from "./style";

export const List = () => {
    const { cart } = useContext(MyContext);

    return (
        <ListSection>
            {Object.keys(cart).map((i, index) => (
                <ListItem key={index}>
                    <img  src={cart[i].image} alt={cart[i].name} />
                    <p>{cart[i].name}</p>
                </ListItem>
            ))}
            <h4>Total: R$ 
                {Object.keys(cart).reduce((acc, value) => acc += cart[value].price, 0)}
            </h4>
        </ListSection>
    )
};