import Header from "@/components/header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>This is footer thing</footer>
    </>
  );
};

export default Layout;
