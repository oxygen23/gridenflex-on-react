import * as images from '../img/images';
function ModalWindowFormReview({
  isVisible = true,
  onClose,
  title,
  body,
  backgroundText
})
{
  return !isVisible ? null : (
    <div  className='modal-window__fix'>
      <div className='modal-window'>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        {body}
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <div className='modal-window-grid'></div>
        <button className='modal-window-grid_close' onClick={onClose}>
          <img src={images.cross} alt="" />
        </button>
      </div>
    </div >
  );
}

export default ModalWindowFormReview;
