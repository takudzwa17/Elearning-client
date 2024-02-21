"use client";
import React from "react";
import { styles } from "../styles/style";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Elearning?</span>
      </h1>
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className=" text-[18px] font-Poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          voluptates, id commodi laborum quidem voluptatum, autem et dolorum
          accusantium ipsam molestias reiciendis veniam quia? Vitae suscipit
          inventore eligendi. Autem mollitia impedit nesciunt, fugiat adipisci
          quas similique culpa! Ipsa, rerum sint.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cum
          ullam maxime ipsum sed exercitationem illo? Aspernatur nulla quos ex
          quam amet nobis, animi dignissimos? Libero, aliquam. Sequi aspernatur
          eveniet ipsum. Id debitis tempore similique animi cumque illum
          repellat? Voluptatem.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cum
          ullam maxime ipsum sed exercitationem illo? Aspernatur nulla quos ex
          quam amet nobis, animi dignissimos? Libero, aliquam. Sequi aspernatur
          eveniet ipsum. Id debitis tempore similique animi cumque illum
          repellat? Voluptatem.
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
