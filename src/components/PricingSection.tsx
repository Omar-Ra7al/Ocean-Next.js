"use client";
import { useState } from "react";
// Constants >> Static Data
import { pricingData } from "@/constants/pricing";
// Types >>
import { PricingMode } from "@/types/interfaces"; // enum
// Components >>
import PricingCard from "@/components/PricingCard";

const PricingSection = () => {
  const [changeMode, setChangeMode] = useState<string>(PricingMode.month);

  return (
    <div>
      <div className="flex bg-slate-800 w-fit mx-auto p-1 rounded-md my-8">
        {/* Month */}
        <button
          onClick={() => {
            setChangeMode(PricingMode.month);
          }}
          className={`btn ${
            changeMode == PricingMode.month ? "btn-primary" : ""
          }`}>
          monthly
        </button>
        {/* Year */}
        <button
          onClick={() => {
            setChangeMode(PricingMode.year);
          }}
          className={`btn ${
            changeMode == PricingMode.year ? "btn-primary" : ""
          }`}>
          annually
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingData.map((card, index) => {
          return <PricingCard key={index} {...card} mode={changeMode} />;
        })}
      </div>
    </div>
  );
};

export default PricingSection;
