import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subheading={"Check it out"}
        heading={"FROM OUR MENU"}></SectionTitle>
      <div className="md:flex bg-black bg-opacity-40  justify-center items-center pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 ">
          <p>Aug 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn text-white btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
