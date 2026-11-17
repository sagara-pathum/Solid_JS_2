import { A } from '@solidjs/router';
import Comp from './Comp';
import { createSignal } from 'solid-js';

import { useMyContext } from './context/MyContextProvider';

const App = () => {

  const { person, setPerson } = useMyContext();

  const [newAge, setNewAge] = createSignal('');

  function changeAge(a) {
    setPerson('age', Number(a));
  }

  return (
    <>
      <h1>Hello world!!!!</h1>
      <Comp />
      <A href="/about">About</A>
      <br />
      <p>I can access the signals in Home</p>
      <p>name : {person.name}</p>
      <p>age : {person.age}</p>

      <br />
      <input type="text" name="p_age" onInput={(e) => setNewAge(e.target.value)} />
      <button onClick={() => changeAge(newAge())}>submit</button>
    </>
  );
};

export default App;
