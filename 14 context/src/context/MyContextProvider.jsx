const { createContext } = require("solid-js");
const { createStore } = require("solid-js/store");


export const myContext = createContext;

export function MyContextProvider(props) {

    const [person, setPerson] = createStore({
        name: 'sagara',
        age: 24
    });

    return (
        <myContext.Provider values={{ person, setPerson }} >
            {props.children}
        </myContext.Provider>
    );
}