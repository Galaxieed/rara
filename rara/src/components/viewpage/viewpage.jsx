import style from "./viewpage.module.css";
import { sampleImages } from "../../sampleData";
import MyGridContainer from "../../shared_components/gridContainer/grid-container";
export default function ViewPage() {
  return (
    <div className={style.container}>
      <MyGridContainer images={sampleImages} isMasonry={false} hasActions={false} />
    </div>
  );
}