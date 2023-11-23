import LayoutMain from "@/components/layouts/layout-main";
import { prisma } from "@/lib/prisma";
import { IPageWithLayout } from "@/types/IPageWithLayout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface IProps {
  repo: IRepo[];
}

interface IRepo {
  id: number;
  title: string;
  content?: string | null;
}

const Page: IPageWithLayout<IProps> = ({ repo }) => {
  return (
    <div>
      {repo.map((i) => (
        <div key={i.id}>
          {i.title} <p>{i.content}</p>
        </div>
      ))}
    </div>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{ repo: IRepo[] }> = async (
  context: GetServerSidePropsContext
) => {
  const post = await prisma.post.findMany();
  const repo: IRepo[] = post;

  return { props: { repo } };
};
