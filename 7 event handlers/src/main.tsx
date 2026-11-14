// event handlers

import { render } from "@solidjs/web";
import { createSignal } from "solid-js";

function Counter() {

  const [name, setName] = createSignal('User');

  const changeName = () => {
    const textbox = document.getElementById("user_name") as HTMLInputElement; // nattam js danne ne .value kiyala ekak element eke thiyanawada kiyala. eka nisa pahala line eke warning ekak pennawa.
    const name = textbox.value.toString().trim() || "User"; // trim eka dala thiyana nisa space gahala empty value danna ba. eka ain wela e wenuwata User print wenwa.
    setName(name);
  }

  return (
    <div>
      <p>The name of the user is {name()}</p>
      <button onClick={() => changeName()}>change the name</button>
      <input type="text" id="user_name" />
    </div>
  );
}

render(() => <Counter />, document.getElementById("app")!);
