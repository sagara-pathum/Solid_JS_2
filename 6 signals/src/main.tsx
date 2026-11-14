import { render } from "@solidjs/web";
import { createSignal } from "solid-js";

function Counter() {
  const [name, setName] = createSignal("luigi");
  const [bool, setBool] = createSignal(true);
  const [age, setAge] = createSignal(24);

  const [person, setPerson] = createSignal({
    name: {
      first: "sagara",
      second: "pathum",
    },
    age: 24,
  });

  setTimeout(() => {
    setName("super luigi");
  }, 3000);

  setTimeout(() => {
    //setBool(false);
    //setBool(!bool());
    setBool((prev) => !prev);
  }, 3000);

  setInterval(() => {
    setAge(age() + 1);
  }, 1000);

  setTimeout(() => {
    setPerson({
      name: {
        first: "pathum",
        second: "wishmika",
      },
      age: 24,
    });
  }, 3000);

  return (
    <div>
      <p>
        My name is {name()} and age is {age()}
      </p>
      <p>Bool value is {bool().toString()}</p>
      <p>
        The name is {person().name.first} {person().name.second}
      </p>
    </div>
  );
}

render(() => <Counter />, document.getElementById("app")!);
