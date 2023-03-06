import axios from 'axios';
import { useState } from 'react';

function Feedback() {
  const [data, setData] = useState({
    author: '',
    email: '',
    society: ''
  });

  const update = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    setData({
      author: '',
      email: '',
      society: ''
    })
  };

  const sendData = () => {
    axios
      .post('', data)
      .then(function (response) {
      console.log(response);
    });
  };

  return (
    <form action='' className='feedback__grid-form' onSubmit={submit}>
      <input
        type='text'
        value={data.author}
        onChange={update}
        name='author'
        className='feedback__grid-form-input'
        placeholder='Ваше имя'
      />
      <input
        type='text'
        value={data.email}
        onChange={update}
        name='email'
        className='feedback__grid-form-input'
        placeholder='Email'
      />
      <input
        type='text'
        value={data.society}
        onChange={update}
        name='society'
        className='feedback__grid-form-input'
        placeholder='Telegram/VK'
      />
      <button className='button' onClick={sendData}>
        Отправить
      </button>
    </form>
  );
}

export default Feedback;
