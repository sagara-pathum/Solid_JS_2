import { createEffect, createSignal, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";

export default () => {

  const [count, setCount] = createSignal(0);

  const [person, setPerson] = createStore({
    name: {
      first: 'sagara',
      last: 'pathum'
    },
    age: 25
  });


  function changeName() {
    setPerson('name', 'first', 'wishmika');
  }

  const incAuto = setInterval(() => { setCount(count() + 1) }, 1000);

  onCleanup(() => clearInterval(incAuto));

  function inc() {
    setCount(count() + 1)
  }

  createEffect(() => {
    console.log("hello", count());

    if (count() === 10) {
      console.log("count is 10");
      clearInterval(incAuto);
    }
  })

  createEffect(() => {
    console.log(person.name.first);  // methana person witharak dammata print wenne na. mokada stores hama property ekak ma individual signal ekak widiyata dakinne.
    // enisa methana wenas wela thiyenne person.name.first misak person kiyana signal eka nemei
  })

  return (
    <div>
      <p>count : {count()}</p>
      <button onClick={inc}>increment</button>

      <br />

      <p>Persons name is {person.name.first} {person.name.last}</p>
      <button onClick={changeName}>Change the Name</button>

    </div>
  );
};

// theyak karama thawa deyak wenna hadanna lesiy effects pawichchi karala