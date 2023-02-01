function Feedback() {
  return (
    <form action='' className='feedback__grid-form'>
      <input
        type='text'
        className='feedback__grid-form-input'
        placeholder='Ваше имя'
      />
      <input
        type='text'
        className='feedback__grid-form-input'
        placeholder='Email'
      />
      <input
        type='text'
        className='feedback__grid-form-input'
        placeholder='Telegram/VK'
      />
      <button className='button'>Отправить</button>
    </form>
  );
}

export default Feedback;