import { User } from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import flagIcon from "@/assets/flags/flag.svg";
import { Button } from "./ui/button";
import Link from "next/link";

interface IProps {}

const Topbar: React.FC<IProps> = () => {
  return (
    <div className="bg-main text-white font-medium text-sm">
      <div className="px-4 py-2 md:container flex items-center">
        <p>Call: +1 078 2376</p>
        <div className="ml-auto flex gap-4">
          <Link href="/login" className="flex items-center gap-2">
            <User className="w-5" />
            <span>Login</span>
          </Link>
          <Separator orientation="vertical" className="h-3 my-auto" />
          <Link href="" className="flex items-center gap-2">
            <Image src={flagIcon} alt="flag" width={25} height={15} />
            <span>USD$</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
