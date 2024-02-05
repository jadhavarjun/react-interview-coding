import { useState } from "react";
import Modal from "./components/Modal/Modal";
import "./App.css";

function App() {
  const [notify, setNotify] = useState(false);

  return (
    <>
      <h1>Creating PopUp Modal</h1>
      <button onClick={() => setNotify(true)}>Open Modal</button>
      {notify && <Modal setNotify={setNotify} />}
    </>
  );
}

export default App;
