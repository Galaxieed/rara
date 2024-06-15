import style from "./trashpage.module.css";
import { sampleImages } from "../../sampleData";
import MyGridContainer from "../../shared_components/gridContainer/grid-container"
export default function TrashPage() {
  return (
    <div className={style.container}>
      <MyGridContainer images={sampleImages} isMasonry={false} hasActions={true} />
    </div>
  );
}