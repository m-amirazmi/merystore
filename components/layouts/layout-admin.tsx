import Layout from "./layout";

interface IProps {
  children: React.ReactNode;
}

const LayoutAdmin: React.FC<IProps> = ({ children }) => {
  return <Layout>LayoutAdmin {children}</Layout>;
};

export default LayoutAdmin;
