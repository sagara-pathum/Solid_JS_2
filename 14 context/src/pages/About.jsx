import { A } from '@solidjs/router';
import { useContext } from 'solid-js';
import { myContext } from '../context/MyContextProvider';

export default () => {

    const { person } = useContext(myContext);

    return (
        <div>
            <p>This is about page</p>
            <A href="/">Home</A>
            <br />
            <p>name : {person.name}</p>
            <p>age : {person.age}</p>
        </div>
    );
}