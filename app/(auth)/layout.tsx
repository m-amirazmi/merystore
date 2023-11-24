interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
