"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/Footer";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="About us- Elearning"
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
      <About />
      <Footer />
    </div>
  );
};

export default Page;
