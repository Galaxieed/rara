import style from "./navbar.module.css";
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <div className={style.navbar}>
        <Link to={`/`} className={style.logo}>RA<br />RA</Link>
        <ul className={style.links}>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/create">CONTACTS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}