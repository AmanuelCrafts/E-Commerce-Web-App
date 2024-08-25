import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div className="">
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eius, tempore beatae pariatur reprehenderit eveniet!
          </p>
        </div>

        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+251967863059</li>
            <li>amanuelabebawfr@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
