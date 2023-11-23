import Layout from "./layout";

interface IProps {
  children: React.ReactNode;
}

const LayoutProvider: React.FC<IProps> = ({ children }) => {
  return <Layout>LayoutProvider {children}</Layout>;
};

export default LayoutProvider;
