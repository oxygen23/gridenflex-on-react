import logo from '../img/GridenFLEX.png';
import Button from './Button';

function Header({isVisble, onClose}) {
  return (
    <div className='header fixed'>
      <div className='header__container'>
        <div className='header__left-block'>
          <a href='/'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div className='header__right-block'>
          <nav className='header__nav-links'>
            <ul>
              <li>
                <a href='#fourth-section'>Кейсы</a>
              </li>
              <li>
                <a href='#sixth-section'>Услуги</a>
              </li>
              <li>
                <a href='#reviews'>Отзывы</a>
              </li>
            </ul>
          </nav>
          <a href='#feedback' className='button'>
            <span>Написать нам</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
