import style from "./footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={style.footer}>
      <h4>{currentYear} Dev.</h4>
      <div>
        <FontAwesomeIcon icon={faFacebook} className={style.icons}/>
        <FontAwesomeIcon icon={faLinkedin} className={style.icons}/>
        <FontAwesomeIcon icon={faYoutube} className={style.icons}/>
        <FontAwesomeIcon icon={faInstagram} className={style.icons}/>
      </div>
    </div>
  );
}