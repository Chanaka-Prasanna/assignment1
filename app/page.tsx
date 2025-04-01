import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button className="w-[340px] h-[40px]">Done</Button>
      <Button variant="variant2" className="w-[340px] h-[40px]">
        Done
      </Button>
      <Button variant="variant3" className="w-[340px] h-[40px]">
        Done
      </Button>
    </div>
  );
}
