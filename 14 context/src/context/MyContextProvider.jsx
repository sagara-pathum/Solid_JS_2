import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const myContext = createContext();

export function MyContextProvider(props) {

    const [person, setPerson] = createStore({
        name: 'sagara',
        age: 24
    });

    return (
        <myContext.Provider value={{ person, setPerson }}>
            {props.children}
        </myContext.Provider>
    );
}

export function useMyContext() {
    return (useContext(myContext));
}