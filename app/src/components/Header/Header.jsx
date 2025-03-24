import { FaGithub } from 'react-icons/fa';
import './Header.styles.css';

const Header = () => {
  return (
    <header>
      <h1 id="header-title">Recify</h1>
      <div className="header-links-theme-container">
        <a
          className="header-link"
          href="https://github.com/recify/recify"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
