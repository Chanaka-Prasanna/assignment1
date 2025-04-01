import CheckBoxCard from "@/components/shared/check-box-card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const pages = [
    { id: 1, name: "Page 1" },
    { id: 2, name: "Page 2" },
    { id: 3, name: "Page 3" },
    { id: 4, name: "Page 4" },
  ];
  return (
    <div className="m-3.5">
      <div className="w-[370px] h-[326px] top-[85px] left-[104px] rounded-[6px] border border-[#EEEEEE] shadow-[0px_8px_15px_0px_#1414141F,0px_0px_4px_0px_#1414141A] flex flex-col justify-center items-center">
        <CheckBoxCard text="All Pages" />
        <div className="w-[370px] h-[20px] px-[15px] py-[10px] flex gap-[10px]">
          <hr className="border-[#CDCDCD] w-[340px] border-[0.7px]" />
        </div>
        <div className="w-[370px] h-[164px]  flex flex-col ">
          {pages.map((page) => (
            <CheckBoxCard key={page.id} text={page.name} />
          ))}
        </div>
        <div className="w-[370px] h-[20px] px-[15px] py-[10px] flex gap-[10px]">
          <hr className="border-[#CDCDCD] w-[340px] border-[0.7px]" />
        </div>

        <div className="w-full h-[60px] py-[10px] px-[15px]">
          <Button className="w-[340px] h-[40px]">Done</Button>
        </div>
      </div>
    </div>
  );
}
