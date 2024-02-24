import "../static/headbar.css";

function Headbar() {
  const element = (
    <nav className="navigation-bar">
      <ul className="first">
        <li>
          <div className="logo">RINSE</div>
        </li>
        <li>
          <div className="home">HOME</div>
        </li>
        <li>
          <div className="artists">ARTISITS</div>
        </li>
        <li>
          <div className="schedule">SCHEDULE</div>
        </li>
        <li>
          <div className="label">LABEL</div>
        </li>
        <li>
          <div className="shop">SHOP</div>
        </li>
        <li>
          <div className="channel">CHANNEL</div>
        </li>
        <li>
          <div className="search">SEARCH &#128269;</div>
        </li>
      </ul>
      <div className="on-air-display">
        <div className="on-air">
          <div className="graphic"></div>
          <div className="radio-station"></div>
          <div className="status"></div>
          <div className="playbutton"></div>
          <div className="add-but">+</div>
        </div>
      </div>
    </nav>
  );
  return element;
}
export default Headbar;
