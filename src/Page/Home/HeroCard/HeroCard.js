import React from "react";
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const HeroCard = () => {
  return (
    <div className="flex gap-3 lg:-mt-16 sm:-mt-10">
      <div className="text-white flex flex-row card bg-primary ">
        <img src={clock} alt="" className=" w-20 p-3 text-white" />
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className="text-white flex flex-row card bg-neutral">
        <img src={marker} alt="" className=" w-20 p-3 text-white"  />
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className="text-white flex flex-row card bg-primary ">
        <img src={phone} alt="" className=" w-20 p-3 text-white" />
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
