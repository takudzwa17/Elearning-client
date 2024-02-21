"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Policy from "./Policy";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Policy- Elearning"
        description="Elearning is a learning management system for helping students"
        keywords="Zimsec, Cambridge, O-Level, A-Level"
      />
      <Header
        open={open}
        setOpen={setOpen}
        setRoute={setRoute}
        route={route}
        activeItem={activeItem}
      />
      <Policy />
      <Footer />
    </div>
  );
};

export default Page;
