import React from "react";

const ServiceCard = ({ service }) => {
  const { img, name, description } = service;
  return (
    <div className="card shadow-xl p-5">
        <figure>
            <img src={img} alt="" />
        </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
