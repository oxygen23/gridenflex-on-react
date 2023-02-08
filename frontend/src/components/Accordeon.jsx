import { useState } from 'react';

function Accordeon() {
  const cardData = [
    {
      block: (
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
              style={{ display: 'none' }}
            >
              Что входит в разработку дизайна: <br />• Прототип
              лендинга/многостраничного сайта • Подбор цветов и типографики •
              Дизайн сайта «от» и «до» • Адаптивный макет
            </div>
          </div>
          <div className='second-section__cards-item-num keyword_green'>1</div>
        </div>
      ),
      radioText: 'Дизайн',
      radioKey: 'design',
    },
    {
      block: (
        <div className='second-section__cards-item'>
          <div className='second-section__cards-item-title'>Frontend</div>
          <div className='second-section__cards-item-slider'>
            <div className='second-section__cards-item-slider-desc_prev'>
              Создадим продающий, удобный и стильный дизайн, отражающий
              специфику и индивидуальность вашего бизнеса. Подберём цвета и
              типографику, сделаем прототип и адаптивный макет для всех
              популярных устройств.
            </div>
            <div
              className='second-section__cards-item-slider-next'
              style={{ display: 'none' }}
            >
              Что входит в разработку дизайна: <br />• Прототип
              лендинга/многостраничного сайта • Подбор цветов и типографики •
              Дизайн сайта «от» и «до» • Адаптивный макет
            </div>
          </div>
          <div className='second-section__cards-item-num keyword_green'>2</div>
        </div>
      ),
      radioText: 'Frontend',
      radioKey: 'frontend',
    },
    {
      block: (
        <div className='second-section__cards-item'>
          <div className='second-section__cards-item-title'>Backend</div>
          <div className='second-section__cards-item-slider'>
            <div className='second-section__cards-item-slider-desc_prev'>
              Разработаем для вас Backend на профессиональном уровне, работая на
              таких языках программирования как Node JS, PHP и Python (Для
              индивидуальных заказов). По вашим потребностям можем использовать
              фреймворк Laravel. Гарантируем полную защиту данных пользователей
              вашего сайта, размещая их в такой базе данных как MySql
            </div>
            <div
              className='second-section__cards-item-slider-next'
              style={{ display: 'none' }}
            >
              Что входит в разработку дизайна: <br />• Прототип
              лендинга/многостраничного сайта • Подбор цветов и типографики •
              Дизайн сайта «от» и «до» • Адаптивный макет
            </div>
          </div>
          <div className='second-section__cards-item-num keyword_green'>3</div>
        </div>
      ),
      radioText: 'Backend',
      radioKey: 'backend',
    },
  ];

  const [blockRender, setBlockRender] = useState(cardData);
  const [selectRadio, setSelectRadio] = useState(0);

  return (
    <div className='second-section__container container'>
      <div className='second-section__slogan'>
        <span className='keyword_fiol'>Gridenflex</span> создает веб-сервисы{' '}
        <br />
        под Вас и ваши задачи
      </div>
      <div className='second-section__cards'>
        {blockRender[selectRadio].block}
      </div>
      <div className='second-section__change-card'>
        {blockRender.map((item, index) => (
          <div className='second-section__change-card_form' key={item.radioKey}>
            <input
              id={item.radioKey}
              type='radio'
              name='radio'
              onClick={() => setSelectRadio(index)}
              defaultChecked={index === selectRadio ? true : false}
            />
            <label htmlFor={item.radioKey}>{item.radioText}</label>
          </div>
        ))}

        {/* <div className='second-section__change-card_form'>
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
        </div> */}
      </div>
    </div>
  );
}

export default Accordeon;
