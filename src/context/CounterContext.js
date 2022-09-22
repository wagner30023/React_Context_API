// 1 - criar context

import { createContext,useState } from "react";

export const CounterContext = createContext();

// 2 - criar provider
// criando o componente com a prop children
export const CounterContextProvider  = ({children }) => {
    // encapsulando para utilizar os demais componentes em que precisamos alterar o valor;
    const [counter,setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{ counter,setCounter}}>
            {children}
        </CounterContext.Provider>
    );
};

