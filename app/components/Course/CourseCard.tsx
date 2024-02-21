/* eslint-disable @next/next/no-img-element */
import Ratings from "@/app/utils/Ratings";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

type Props = {
  item: any;
  isProfile?: boolean;
  user?: any;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
    >
      <div className="w-full min-h-[35vh] dark:bg-slate-500 dark:bg-opacity-20 background-blur border dark:borer-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm data:shadow-inner">
        <img
          src={item.thumbnail?.url}
          width={500}
          height={300}
          className="rounded-lg"
          alt=""
        />
        <br />
        <h1 className="font-Poppins text-[16px] text-black dark:text-[#fff]">
          {item.name}
        </h1>
        <div className="w-full flex items-center justify-between pt-2">
          <Ratings rating={4.5} />
          <h5
            className={`text-black dark:text-[#fff] ${
              isProfile && "hidden 800px:inline"
            }`}
          >
            {item.purchased} Students
          </h5>
        </div>
        <div className="w-full flex items-center justify-between pt-3">
          <div className="flex">
            <h5 className="text-black dark:text-[#fff]">
              {item.price === 0 ? "Free" : "$" + item.price}
            </h5>
            <h5 className=" pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
              ${item.estimatedPrice}
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-[14px] text-black dark:text-[#fff]">
              {item.courseData?.length} Lectures
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
