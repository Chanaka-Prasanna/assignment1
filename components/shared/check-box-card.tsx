import React from "react";
import { Checkbox } from "../ui/check-box";

const CheckBoxCard = ({
  text,
  isChecked,
  onChange,
}: {
  text: string;
  isChecked: boolean;
  onChange: () => void;
}) => {
  return (
    <div
      onClick={onChange}
      className="group w-[370px] h-[42px] top-[20px] flex justify-between py-[8px] pl-[22px] pr-[15px] transition-all duration-200 hover:cursor-pointer select-none group"
    >
      <p className="font-normal text-[14px] leading-[130%] tracking-[0px] flex items-center">
        {text}
      </p>
      <div className="w-[35px] h-[35px] flex justify-center items-center">
        <Checkbox checked={isChecked} />
      </div>
    </div>
  );
};

export default CheckBoxCard;
