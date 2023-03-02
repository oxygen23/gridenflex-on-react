import * as images from '../../img/images';
function ModalCorp({ isVisible = true, onClose, backgroundText }) {
  return !isVisible ? null : (
    <div className='modal-window__fix'>
      <div className='modal-window card'>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'>
          <div className='modal-window__title'>
            Интернет <br /> магазин
          </div>
          <div className='modal-window__img'>
            <img src={images.shop} alt='' />
          </div>
          <div className='modal-window__price'>
            От <span>150 000</span> руб
          </div>
          <button className='button modal-window__button'>Заказать</button>
        </div>
        <div className='modal-window-grid card'>
          Лендинг пейдж (landing page) или просто «лендинг» — это
          интернет-страница, которая при помощи краткой презентации продукта
          побуждает пользователя совершить целевое действие. Например, купить
          билет на мероприятие, оставить заявку на расчет стоимости услуги,
          подписаться на рассылку, зарегистрироваться.
        </div>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'></div>
        <div className='modal-window-grid card'></div>
        <button className='modal-window-grid_close' onClick={onClose}>
          <img src={images.cross} alt='' />
        </button>
      </div>
    </div>
  );
}

export default ModalCorp;