import "./Card.css";
export default ({title,follow,imgUrl}) => {
  return (
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
  );
};
