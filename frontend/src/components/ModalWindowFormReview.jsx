import Button from "./Button";

function ModalWindowFormReview({
  isVisible = true,
  onClose,
  title,
  body,
  backgroundText,
}) {
  return !isVisible ? null : (
    <div className='modal-window'>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      {body}
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
      <div className="modal-window-grid"></div>
    </div>
  );
}

export default ModalWindowFormReview;
