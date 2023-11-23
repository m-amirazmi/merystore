import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

interface IProps {}

const Page: React.FC<IProps> = () => {
  const session = useSession();

  console.log(session.data?.user);

  return (
    <div>
      Page <Button onClick={() => signIn("google")}>Sign In With Google</Button>
    </div>
  );
};

export default Page;
