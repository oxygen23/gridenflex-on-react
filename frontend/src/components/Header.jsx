import logo from '../img/GridenFLEX.png';
import Button from './Button';

function Header() {
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
          <Button>
            <span>Написать нам</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
