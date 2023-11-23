import Layout from "./layout";

interface IProps {
  children: React.ReactNode;
}

const LayoutMain: React.FC<IProps> = ({ children }) => {
  return <Layout>LayoutMain {children}</Layout>;
};

export default LayoutMain;
