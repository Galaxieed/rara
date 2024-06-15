import style from "./sidebar.module.css";
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

export default function SideBar() {
  let [currentLocation, setLocation] = useState(useLocation().pathname);
  let link = useLocation().pathname;
  useEffect(() => {
    if (link === "/") {
      setLocation("/");
    }
  }, [link]);
  
  return (
    <div className={style.sidebar}>
      <ul>
        <NavItems activeLink={currentLocation} label="CREATE" link="/create" setter={setLocation}/>
        <NavItems activeLink={currentLocation} label="FAVORITES" link="/favorites" setter={setLocation}/>
        <NavItems activeLink={currentLocation} label="VIEW" link="/view" setter={setLocation}/>
        <NavItems activeLink={currentLocation} label="TRASH" link="/trash" setter={setLocation}/>
      </ul>
    </div>
  );
}

function NavItems(props) {  
  return (
    <li className={props.activeLink == props.link ? `${style.active}` : undefined}
      onClick={() => {props.setter(props.link)}}>
      <Link to={props.link}>{props.label}</Link>
    </li>
  );
}

NavItems.propTypes = {
  activeLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
}