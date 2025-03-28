import { FaGithub } from 'react-icons/fa';
import './Header.styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <h1 id="header-title">Recify</h1>
      </Link>
      <nav>
        <div className="header-links-theme-container">
          <a
            className="header-link"
            href="https://github.com/recify/recify"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
