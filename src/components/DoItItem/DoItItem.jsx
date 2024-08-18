import CheckBox from "../CheckBox/CheckBox";
import CheckBoxArchive from "../CheckBoxArchive/CheckBoxArchive";
import "./DoItItem.scss";

function DoItItem({ title, detail }) {
  return (
    <article className="do-it-item">
      <div className="do-it-item__todo">
        <div>
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
        <CheckBox />
      </div>
      <div className="do-it-item__time">
        <div>
          <span>오늘</span>
          <output>오전 00:00 - 00:00</output>
        </div>
        <CheckBoxArchive />
      </div>
    </article>
  );
}

export default DoItItem;
