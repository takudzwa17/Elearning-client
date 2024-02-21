import React from "react";
import Image from "next/image";
import { styles } from "@/app/styles/style";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    profession: "Student | Software Engineer",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ",
  },
  {
    name: "Takudzwa Pams",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    profession: "Student | computer Sytems Engineer | Zimbabwe",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    name: "Takudzwa Muchemwa",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    profession: " Network Sytems Engineer | South Africa",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    name: "Catlyin Bridges",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    profession: "Telecomms Engineer | South Sudan",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    name: "Willian Borges",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    profession: " Business Analyst | Algeria",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assets/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            dicta esse officia. Odit voluptate, quo dolorem cum sint facilis
            nemo nesciunt numquam sapiente placeat ipsa ab laborum eum
            recusandae inventore quibusdam tempora reprehenderit assumenda,
            reiciendis modi molestiae impedit! Minus, nulla.
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
