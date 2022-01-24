import { useContext } from "react";
import { MyContext } from "../../provider/provider";
import { HeaderStyle, IconSearch } from "./style";
import { AiOutlineSearch } from 'react-icons/ai'
import { ShopCart } from "../shopCart";
import { List } from "../list";

export const Header = () => {
    const { getSearch, showList } = useContext(MyContext);

    return (
        <HeaderStyle>
            <IconSearch>
                <AiOutlineSearch size={'2rem'} color="#757575" />
            </IconSearch>
            <input type='text' placeholder="Busque aqui" 
            onChange={(e) => getSearch((e.target.value).toLocaleUpperCase())}/>
            <ShopCart />
            {showList && <List/> }
        </HeaderStyle>
    )
};