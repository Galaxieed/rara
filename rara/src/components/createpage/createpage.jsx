import style from "./createpage.module.css";

export default function CreatePage() {
  return (
    <div className={style.container}>
      <label htmlFor="album-name">Album Name: </label>
      <input type="text" id="album-name" />
      <br />
      <br />
      <label htmlFor="note">Text / Note: </label>
      <textarea id="note" name="note" rows="7" placeholder="Type your note here..."></textarea>
      <br />
      <br />
      <label htmlFor="file">Upload File: </label>
      <input type="file" name="file" id="file" />
    </div>
  );
}