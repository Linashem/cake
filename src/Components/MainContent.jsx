import React from "react";
import { Benefits } from "./Benefits/Benefits";
import { Carousel } from "./Carousel/Carousel";
import { NewTastes } from "./NewTastes/NewTastes";

export const MainContent = () => {
  return (
    <>
      <Carousel />
      <NewTastes />
      <Benefits />
    </>
  );
};
