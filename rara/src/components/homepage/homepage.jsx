import RARALogo from "../../shared_components/logo/logo";
import style from "./homepage.module.css";

export default function Homepage() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <RARALogo />
      </div>
    </div>
  );
}