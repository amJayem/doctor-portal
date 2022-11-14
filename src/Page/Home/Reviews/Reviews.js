import React from "react";
import quote from "../../../assets/icons/quote.svg";

const Reviews = () => {
  const review = [
    {
      id: 1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      userName: "Winson Herry",
      location: "California",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4urSk5rhCXhtD7boCKRft0XRpdWsxeSYMA",
    },
    {
      id: 1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      userName: "Winson Herry",
      location: "California",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4urSk5rhCXhtD7boCKRft0XRpdWsxeSYMA",
    },
    {
      id: 1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      userName: "Winson Herry",
      location: "California",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4urSk5rhCXhtD7boCKRft0XRpdWsxeSYMA",
    },
  ];
  return (
    <section className="my-28">
      <div className="flex flex-row justify-between items-center ">
        <div>
          <p className="text-primary text-xl font-bold">Testimonial</p>
          <h1 className="text-3xl font-semibold">What Our Patients Says</h1>
        </div>
        <img className="w-1/4" src={quote} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-20">
        {review.map((rvw,i) => (
          <div key={i}>
            <div className=" shadow-xl">
              <div className="card-body">
                <p>{rvw.comment}</p>
                <div className="grid grid-cols-2 mt-20">
                  <img
                    src={rvw.profileImg}
                    className="w-20 rounded-full"
                    alt="Shoes"
                  />
                  <div>
                    <h2 className="card-title">{rvw.userName}</h2>
                    <p>{rvw.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
