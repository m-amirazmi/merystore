import LayoutAdmin from "@/components/layouts/layout-admin";
import { IPageWithLayout } from "@/types/IPageWithLayout";

interface IProps {}

const Page: IPageWithLayout<IProps> = () => {
  return <div>Page</div>;
};

Page.getLayout = (page: React.ReactElement) => {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default Page;
