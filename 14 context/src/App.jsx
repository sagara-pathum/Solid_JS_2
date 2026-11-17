import { A } from '@solidjs/router';
import Comp from './Comp';

const App = () => {
  return (
    <>
      <h1>Hello world!!!!</h1>
      <Comp />
      <A href="/about">About</A>
    </>
  );
};

export default App;
