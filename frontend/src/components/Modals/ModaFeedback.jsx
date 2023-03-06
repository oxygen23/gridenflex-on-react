import axios from 'axios';
import { useState } from 'react';
import Button from '../Button';

function ModalFeedback() {
  const [data, setData] = useState({
    author: '',
    email: '',
    society: '',
    description: '',
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
      society: '',
      description: ''
    })
  };

  const sendData = () => {
    axios.post('http://localhost:3001/api/sendContacts', data).then(function (response) {
      console.log(response);
    });
  };
  
  return (
    <div className='modal-window-grid'>
      <div className='modal-window-grid_title'>
        давайте обсудим <span>ваш проект</span>
      </div>
      <div className='modal-window-grid_center'>
        <form
          action=''
          className='modal-window-grid_form lessMargin'
          onSubmit={submit}
        >
          <input
            type='text'
            value={data.author}
            name='author'
            placeholder='Ваше имя'
            onChange={update}
          />
          <input
            type='email'
            value={data.email}
            name='email'
            placeholder='Email'
            onChange={update}
          />
          <input
            type='text'
            value={data.society}
            name='society'
            placeholder='Telegram/VK'
            onChange={update}
          />
          <input
            type='text'
            value={data.description}
            name='description'
            placeholder='Как вы узнали о нас?'
            onChange={update}
          />
          <button className='button' onClick={sendData}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalFeedback;
