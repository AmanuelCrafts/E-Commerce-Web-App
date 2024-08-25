import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolorem praesentium cum facilis, tenetur quibusdam ipsam quaerat
            quas vero expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            explicabo quo repudiandae soluta veniam nesciunt deleniti, aliquam
            dolorum, quaerat animi dolores. Eligendi, veritatis. Facere,
            adipisci.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            recusandae ratione voluptas rerum dolorum deleniti laborum dolores
            saepe.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            repudiandae ipsa sapiente, deleniti quod eius asperiores corporis
            unde obcaecati dolore.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Covenience: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            repudiandae ipsa sapiente, deleniti quod eius asperiores corporis
            unde obcaecati dolore.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            repudiandae ipsa sapiente, deleniti quod eius asperiores corporis
            unde obcaecati dolore.
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default About;
