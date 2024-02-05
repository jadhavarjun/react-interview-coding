import { useState } from "react";
// import Modal from "./components/Modal/Modal";
// import Table from "./components/ShowApiDataTableFormat/table";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import "./App.css";

function App() {
  const [notify, setNotify] = useState(false);

  return (
    <>
      {/* Showing Popuo */}
      {/* <h1>Creating PopUp Modal</h1>
      <button onClick={() => setNotify(true)}>Open Modal</button>
      {notify && <Modal setNotify={setNotify} />} */}
      {/* <Table /> */}
      <LightDarkMode />
    </>
  );
}

export default App;
