import LayoutCustomer from "@/components/layouts/layout-customer";
import { IPageWithLayout } from "@/types/IPageWithLayout";

interface IProps {}

const Page: IPageWithLayout<IProps> = () => {
  return <div>Page</div>;
};

Page.getLayout = (page: React.ReactElement) => {
  return <LayoutCustomer>{page}</LayoutCustomer>;
};

export default Page;
