import React from "react";
import "../../../assets/css/client/Home/home.css";
import { CircleArrowRight } from "lucide-react";
function Servicecard({ serIcon, serType, serImg, serInfo }) {
  return (
    <>
      <div className="offer-type">
        <div className="type-head">
          <img src={serIcon} />
          <p>{serType}</p>
        </div>
        <div className="type-img">
          <img src={serImg} />
        </div>
        <div className="type-description">
          <p>{serInfo}</p>
          <button className="type-btn">
            View Details
            <CircleArrowRight className="arrow" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Servicecard;
