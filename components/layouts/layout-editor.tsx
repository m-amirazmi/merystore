import Layout from "./layout";

interface IProps {
  children: React.ReactNode;
}

const LayoutEditor: React.FC<IProps> = ({ children }) => {
  return <Layout>LayoutEditor {children}</Layout>;
};

export default LayoutEditor;
