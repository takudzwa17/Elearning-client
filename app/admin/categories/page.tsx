"use client";
import { FC, useState, useEffect } from "react";
import Heading from "../../utils/Heading";
import AdminSideBar from "../../components/Admin/sidebar/AdminSideBar";
import AdminProtected from "../../hooks/adminProtected";
import DashboardHero from "../../components/Admin/DashboardHero";
import EditCategories from "../../components/Admin/Customization/EditCategories";

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
            <DashboardHero />
            <EditCategories />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
