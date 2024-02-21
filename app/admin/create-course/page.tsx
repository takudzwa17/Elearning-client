"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSideBar";
import Heading from "../../utils/Heading";
import DashboardHeader from "../../components/Admin/DashboardHeader";
import CreateCourse from "../../components/Admin//Course/CreateCourse";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="E-learning"
        description="E-learning is a platform for students to learn and get help from teachers"
        keywords="A-level, O-level, Grade 7, Zimsec, Cambridge"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default page;
