import {createContext} from "react"


// (1) creamos el contexto 
export const FilterContext = createContext();

// (2) proveer el context
export function FilterProvider({children}){

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
      });

    return (
        <FilterContext.Provider value={{filters, setFilters}}> 
            {children}
        </FilterContext.Provider>
    )
}