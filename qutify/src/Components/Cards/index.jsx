
import "./Card.css";
import Tooltip from "@mui/material/Tooltip";
export default ({ totalSongs, title, follow, imgUrl }) => {
  return (
    <Tooltip title={`${totalSongs} songs`} placement="top">
      <div className="card-wrapper">
        <div className="cards">
          <div className="card-img-frm">
            <img src={imgUrl}></img>
          </div>
          <div className="card-containt">
            <div className="card-containt-pill">
              <p> {follow} Follows</p>
            </div>
          </div>
        </div>
        <p className="card-label">{title}</p>
      </div>
    </Tooltip>
  );
};
