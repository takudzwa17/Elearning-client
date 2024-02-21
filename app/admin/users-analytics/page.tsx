"use client";
import { FC, useState, useEffect } from "react";
import Heading from "../../utils/Heading";
import AdminSideBar from "../../components/Admin/sidebar/AdminSideBar";
import AdminProtected from "../../hooks/adminProtected";
import DashboardHeader from "../../components/Admin/DashboardHeader";
import UsersAnalytics from "../../components/Admin/Analytics/UsersAnalytics";

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
        <div className="flex h-[200vh]">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSideBar />
          </div>
          <div className="w-[85%]">
            <DashboardHeader />
            <UsersAnalytics />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
