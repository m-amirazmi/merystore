import Layout from "./layout";

interface IProps {
  children: React.ReactNode;
}

const LayoutCustomer: React.FC<IProps> = ({ children }) => {
  return <Layout>LayoutCustomer {children}</Layout>;
};

export default LayoutCustomer;
