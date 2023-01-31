
function Accordeon() {

  return (
    <div className='second-section__container container'>
      <div className='second-section__slogan'>
        <span className='keyword_fiol'>Gridenflex</span> создает веб-сервисы{' '}
        <br />
        под Вас и ваши задачи
      </div>
      <div className='second-section__cards'>
        <div className='second-section__cards-item'>
          <div className='second-section__cards-item-title'>Дизайн</div>
          <div className='second-section__cards-item-slider'>
            <div className='second-section__cards-item-slider-desc_prev'>
              Создадим продающий, удобный и стильный дизайн, отражающий
              специфику и индивидуальность вашего бизнеса. Подберём цвета и
              типографику, сделаем прототип и адаптивный макет для всех
              популярных устройств.
            </div>
            <div
              className='second-section__cards-item-slider-next'
              style={{display: 'none'}}
            >
              Что входит в разработку дизайна: <br />• Прототип
              лендинга/многостраничного сайта • Подбор цветов и типографики •
              Дизайн сайта «от» и «до» • Адаптивный макет
            </div>
          </div>
          <div className='second-section__cards-item-num keyword_green'>1</div>
        </div>
        <div className='second-section__cards-item' style={{display: 'none'}}>
          <div className='second-section__cards-item-title'>Дизайн</div>
          <div className='second-section__cards-item-slider'>
            <div className='second-section__cards-item-slider-desc_prev'>
              Создадим продающий, удобный и стильный дизайн, отражающий
              специфику и индивидуальность вашего бизнеса. Подберём цвета и
              типографику, сделаем прототип и адаптивный макет для всех
              популярных устройств.
            </div>
            <div
              className='second-section__cards-item-slider-next'
              style={{display: 'none'}}
            >
              Что входит в разработку дизайна: <br />• Прототип
              лендинга/многостраничного сайта • Подбор цветов и типографики •
              Дизайн сайта «от» и «до» • Адаптивный макет
            </div>
          </div>
          <div className='second-section__cards-item-num keyword_green'>1</div>
        </div>
        <div className='second-section__cards-item' style={{display: 'none'}}>
          <div className='second-section__cards-item-title'>Дизайн</div>
          <div className='second-section__cards-item-slider'>
            <div className='second-section__cards-item-slider-desc_prev'>
              Создадим продающий, удобный и стильный дизайн, отражающий
              специфику и индивидуальность вашего бизнеса. Подберём цвета и
              типографику, сделаем прототип и адаптивный макет для всех
              популярных устройств.
            </div>
            <div
              className='second-section__cards-item-slider-next'
              style={{display: 'none'}}
            >
              Что входит в разработку дизайна: <br />• Прототип
              лендинга/многостраничного сайта • Подбор цветов и типографики •
              Дизайн сайта «от» и «до» • Адаптивный макет
            </div>
          </div>
          <div className='second-section__cards-item-num keyword_green'>1</div>
        </div>
      </div>
      <div className='second-section__change-card'>
        <div className='second-section__change-card_form'>
          <input id='design' type='radio' name='radio' defaultChecked={true} />
          <label htmlFor='design'>Дизайн</label>
        </div>
        <div className='second-section__change-card_form'>
          <input id='frontend' type='radio' name='radio' />
          <label htmlFor='frontend'>Frontend</label>
        </div>
        <div className='second-section__change-card_form'>
          <input id='backend' type='radio' name='radio' />
          <label htmlFor='backend'>Backend</label>
        </div>
      </div>
    </div>
  );
}

export default Accordeon;
