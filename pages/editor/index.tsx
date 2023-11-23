import LayoutEditor from "@/components/layouts/layout-editor";
import { IPageWithLayout } from "@/types/IPageWithLayout";

interface IProps {}

const Page: IPageWithLayout<IProps> = () => {
  return <div>Page</div>;
};

Page.getLayout = (page: React.ReactElement) => {
  return <LayoutEditor>{page}</LayoutEditor>;
};

export default Page;
