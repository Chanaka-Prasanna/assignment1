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
    // <div className="w-[370px] h-[42px] top-[20px] left-[20px] flex justify-between py-[8px] pl-[22px] pr-[15px]">
    <div
      onClick={onChange}
      className="w-[370px] h-[42px] top-[20px] hover:top-[82px] active:top-[144px] left-[20px] flex justify-between py-[8px] pl-[22px] pr-[15px] transition-all duration-0  group hover:cursor-pointer"
    >
      <p className="font-normal text-[14px] leading-[130%] tracking-[0px]  flex items-center ">
        {text}
      </p>
      <div className="w-[35px] h-[35px] flex justify-center items-center">
        <Checkbox checked={isChecked} />
      </div>
    </div>
  );
};

export default CheckBoxCard;
