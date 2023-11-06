import './App.css';
import srcImage from './image/src.svg';
import modelImg from './image/cube-shape.svg';
import profile from './image/user-profile-circle.svg';

function App() {
  return (
    <div className="app">
      <div className="header">
        <a href="#" className="header__logo">
          <img
            className="header__logo-img"
            src="https://explorertest.boincai.com/static/logo-dark.svg"
            alt="logo"
          />
        </a>
        <div className="header__menu">
          <ul className="header__menu-items">
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                <span className="text">Models</span>
                <img src={modelImg} alt="" className="menu__img" />
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                <span className="text">Datasets</span>
                <img src={modelImg} alt="" className="menu__img" />
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                <span className="text">Spaces</span>
                <img src={modelImg} alt="" className="menu__img" />
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                <span className="text">Blockchain</span>
                <img src={modelImg} alt="" className="menu__img" />
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                <span className="text">Docs</span>
                <img src={modelImg} alt="" className="menu__img" />
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                <span className="text">Pricing</span>

                <img src={modelImg} alt="" className="menu__img" />
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                <span className="text">Other</span>

                <img src={modelImg} alt="" className="menu__img" />
              </a>
            </li>
          </ul>
        </div>
        <div className="header__auth">
          <ul className="header__auth-items">
            <li className="header__auth-item">
              <a href="#" className="header__auth-link">
                <img src={srcImage} alt="" className="header__src-img" />
              </a>
            </li>
            <li className="header__auth-item">
              <a href="#" className="header__auth-link lang-link">
                <img
                  src="https://img.icons8.com/color/48/great-britain.png"
                  alt="great-britain"
                  className="lang-img"
                />
                <span className="lang-text">ENG</span>
              </a>
            </li>
            <li className="header__auth-item login">
              <a href="#" className="header__auth-link link-login">
                <img src={profile} alt="" className="login-img" />
                <span className="login-text">Log In</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
