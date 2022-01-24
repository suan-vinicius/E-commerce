import React from "react";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../provider/provider";
import { FilterPrice, FilterStyle } from "./style";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const Filter = () => {
    const { filter, getFilter } = useContext(MyContext);
    const [ dataRange, setRange ] = useState([100, 10000]);
    const [ section, setSection ] = useState('');
    const { Range } = Slider;

    useEffect(() => {
        getFilter(dataRange[0], dataRange[1], section)
    },[dataRange, getFilter, section]);

    return (
        <FilterStyle>
            <h3>Filtrar por:</h3>
            <h4>Preço</h4>
            <Range defaultValue={[100, 10000]} max={10000} step={200} 
             onChange={(e) => setRange(e)} style={{width: '70%'}} />
            <FilterPrice>
                <p>R$ {dataRange[0]}</p>
                <p>R$ {dataRange[1]}</p>
            </FilterPrice>
            <h4>Categorias</h4>
            {Object.keys(filter).map((i, index) => (
                <label key={index}>
                    <input type='radio' value={filter[i]} name='check'
                    onChange={(e) => setSection(e.target.value)}
                    key={index}/>
                    {filter[i]}
                </label>
            ))}
        </FilterStyle>
    )
};