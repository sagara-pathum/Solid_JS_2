import { A } from '@solidjs/router';
import { useMyContext } from '../context/MyContextProvider';

export default () => {

    const { person } = useMyContext();

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