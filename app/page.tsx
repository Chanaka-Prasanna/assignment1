"use client";
import CheckBoxCard from "@/components/shared/check-box-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SelectedPagesState {
  [key: number]: boolean;
}

const pages = [
  { id: 1, name: "Page 1" },
  { id: 2, name: "Page 2" },
  { id: 3, name: "Page 3" },
  { id: 4, name: "Page 4" },
];

export default function Home() {
  const [selectedPages, setSelectedPages] = useState<SelectedPagesState>({});

  const isAllSelected = pages.every((page) => selectedPages[page.id]);

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedPages({});
    } else {
      const newSelected = pages.reduce<SelectedPagesState>((acc, page) => {
        acc[page.id] = true;
        return acc;
      }, {});
      setSelectedPages(newSelected);
    }
  };

  const handlePageSelect = (pageId: number) => {
    setSelectedPages((prev) => ({
      ...prev,
      [pageId]: !prev[pageId],
    }));
  };

  return (
    <div className="m-3.5">
      <div className="w-[370px] h-[326px] top-[85px] left-[104px] rounded-[6px] border border-[#EEEEEE] shadow-[0px_8px_15px_0px_#1414141F,0px_0px_4px_0px_#1414141A] flex flex-col justify-center items-center">
        <CheckBoxCard
          text="All Pages"
          isChecked={isAllSelected}
          onChange={handleSelectAll}
        />

        <div className="w-full h-[20px] px-[15px] py-[10px] flex gap-[10px]">
          <hr className="border-[#CDCDCD] w-[340px] border-[0.7px]" />
        </div>
        <div className="w-full h-[164px]  flex flex-col ">
          {pages.map((page) => (
            <CheckBoxCard
              key={page.id}
              text={page.name}
              isChecked={!!selectedPages[page.id]}
              onChange={() => handlePageSelect(page.id)}
            />
          ))}
        </div>
        <div className="w-full h-[20px] px-[15px] py-[10px] flex gap-[10px]">
          <hr className="border-[#CDCDCD] w-[340px] border-[0.7px]" />
        </div>

        <div className="w-full h-[60px] py-[10px] px-[15px]">
          <Button className="w-[340px] h-[40px]">Done</Button>
        </div>
      </div>
    </div>
  );
}
