import { useRef } from "react";

const Modal = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          // window.my_modal_1.showModal()
          ref.current && ref.current.showModal();
        }}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal" ref={ref}>
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
