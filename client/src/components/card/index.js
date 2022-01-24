import { useContext } from "react";
import { MyContext } from "../../provider/provider";
import { CardDetails, CardImg, CardStyles, SectionCard } from "./style";
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Card = () => {
    const { data, setCart } = useContext(MyContext);

    return (
        <SectionCard>
            {Object.keys(data).length ?            
            Object.keys(data).map((i, index) => (
                <CardStyles key={index}>
                    <CardImg>
                        <img src={data[i].image} alt={data[i].name} />  
                    </CardImg>
                    <CardDetails>
                        <p>{data[i].name}</p>
                        <p>R$ {data[i].price}</p>
                        <p>ou 12x de R$ {data[i].split}</p>        
                        <button onClick={() => setCart(value => [...value, data[i]])}>
                            <AiOutlineShoppingCart size={'1.7rem'}/> 
                            <b>COMPRAR</b>
                        </button>
                    </CardDetails>
                </CardStyles>
            )) 
            :
                <p><b>Não há resultados para essa pesquisa.</b></p>
            }
        </SectionCard>
    )
};