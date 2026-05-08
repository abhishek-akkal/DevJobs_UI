import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>
            Save <Bookmark size={15} />
          </button>
        </div>
        <div className="center">
          <div className="company">
            <h3>{props.company}</h3> <span>{props.posted}</span>
          </div>
          <h2>{props.post}</h2>
          <div className="tags">
            <span>{props.tag1}</span>
            <span>{props.tag2}</span>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
