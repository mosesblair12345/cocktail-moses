import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, Image, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={Image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className="btn btn-primary">
          more info
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
