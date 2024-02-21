"use client";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminSideBar from "@/app/components/Admin/sidebar/AdminSideBar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "../../utils/Heading";
import React from "react";
import AllCourses from "../../components/Admin/Course/AllCourses";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="E-learning"
          description="E-learning is a platform for students to learn and get help from teachers"
          keywords="A-level, O-level, Grade 7, Zimsec, Cambridge"
        />
        <div className="flex h-[screen]">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSideBar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
