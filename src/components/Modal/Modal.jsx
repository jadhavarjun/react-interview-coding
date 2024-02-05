import React from "react";
// import "../../index.css";
const Modal = ({ setNotify }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={() => setNotify(false)}>
        <div className="modal-container" onClick={() => setNotify(true)}>
          <h2>This is modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            dolorum ratione quisquam neque at. Quae dolor aliquid quas
            dignissimos quam?
          </p>
          <button onClick={() => setNotify(false)}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
