import React from "react";
import cavity from "../../../../assets/images/cavity.png";
import fluoride from "../../../../assets/images/fluoride.png";
import whitening from "../../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";
import treatment from '../../../../assets/images/treatment.png'

const ServiceCards = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      img: cavity,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      name: "Cavity Filling",
      img: fluoride,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      name: "Teeth Whitening",
      img: whitening,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div className="my-36">
        <div className="text-center my-8">
            <h1 className="font-bold uppercase text-primary">Our services</h1>
            <p className="text-5xl">Service We Provide</p>
        </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  p-5">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 my-20 w-3/4 mx-auto ">
        <img src={treatment} className='w-96 rounded-lg' alt="" />
        <div>
            <h1 className="text-3xl font-semibold my-5">Exceptional Dental Care, on Your Terms</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary text-white mt-5">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
