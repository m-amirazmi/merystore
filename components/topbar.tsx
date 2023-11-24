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
      <div className="px-4 md:container flex justify-between items-center">
        <p>Call: +1 078 2376</p>
        <div className="flex">
          <Button asChild variant="link" className="text-white">
            <Link href="/login" className="flex items-center gap-2">
              <User className="w-5" />
              <span>Login</span>
            </Link>
          </Button>
          <Separator orientation="vertical" className="h-3 my-auto" />
          <Button variant="link" className="flex items-center gap-2 text-white">
            <Image src={flagIcon} alt="flag" width={25} height={15} />
            <span>USD$</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
