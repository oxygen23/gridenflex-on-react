import { useEffect, useState } from 'react';
import logo from '../img/GridenFLEX.png';
import Button from './Button';

function Header() {

  const [scroll, setScroll] = useState(0);

  const documentHeight = document.documentElement.clientHeight

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={scroll > documentHeight ? 'header fixed' : 'header'}>
      <div className='header__container'>
        <div className='header__left-block'>
          <a href='#'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div className='header__right-block'>
          <nav className='header__nav-links'>
            <ul>
              <li>
                <a
                  href='#fourth-section'
                  className={scroll > 1756 && scroll < 3433 ? 'active' : null}
                  
                >
                  Кейсы
                </a>
              </li>
              <li>
                <a
                  href='#sixth-section'
                  className={scroll > 4426 && scroll < 5470 ? 'active' : null}
                  
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href='#reviews'
                  className={scroll > 6398 && scroll < 7116 ? 'active' : null}
                  
                >
                  Отзывы
                </a>
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
