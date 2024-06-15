import style from "./favorites_page.module.css";
import { sampleImages } from "../../sampleData";
import MyGridContainer from "../../shared_components/gridContainer/grid-container";

export default function FavoritesPage() {
  return (
    <div className={style.container}>
      <MyGridContainer images={sampleImages} isMasonry={true} hasActions={false}/>
    </div>
  );
}
