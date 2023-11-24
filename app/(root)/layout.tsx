import Header from "@/components/header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4 md:container">{children}</main>
      <footer className="mt-auto px-4 md:container py-4">
        This is footer thing
      </footer>
    </>
  );
};

export default Layout;
