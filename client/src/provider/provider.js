import { createContext, useCallback, useState } from "react";
import Axios from 'axios';

export const MyContext = createContext();

export const Provider = ({ children }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [cart, setCart] = useState([]);
    const [showList, setShowList] = useState(false)

    const filterSection = (data) => {
        setFilter(Object.keys(data).reduce((acc, i) => 
            acc.includes(data[i].section) ? acc : acc.concat(data[i].section), []
            )
        );
    };

    const getData = () => {
        Axios.get('/data')
        .then(({data}) => ((setData(data), filterSection(data))))
        .catch((err) => console.log(err))
    };

    const getSearch = (name) => {
        Axios.get(`/data/${name}`)
        .then(({data}) => setData(data))
        .catch((err) => console.log(err))
    };

    const getFilter = (min=0, max=10000, section) => {
        Axios.get(`/data/${min}/${max}/${section}`)
        .then(({data}) => setData(data))
        .catch((err) => console.log(err))
    };

    const values = {
        data: data,
        filter: filter,
        cart: cart,
        setCart: setCart,
        showList: showList,
        setShowList: setShowList,
        getData: useCallback(getData, []),
        getSearch: useCallback((name) => getSearch(name), []),
        getFilter: useCallback((section, min, max) => getFilter(section, min, max), [])
    };

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
};