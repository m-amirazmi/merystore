import LayoutMain from "@/components/layouts/layout-main";
import { prisma } from "@/lib/prisma";
import { IPageWithLayout } from "@/types/IPageWithLayout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useSession } from "next-auth/react";

interface IProps {}

const Page: IPageWithLayout<IProps> = () => {
  const session = useSession();
  console.log(session);

  return <div></div>;
};

Page.getLayout = (page: React.ReactElement) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Page;

// export const getServerSideProps: GetServerSideProps<{ repo: IRepo[] }> = async (
//   context: GetServerSidePropsContext
// ) => {
//   const post = await prisma.post.findMany();
//   const repo: IRepo[] = post;

//   return { props: { repo } };
// };
