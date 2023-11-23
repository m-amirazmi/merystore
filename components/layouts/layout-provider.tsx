interface IProps {
  children: React.ReactNode;
}

const LayoutProvider: React.FC<IProps> = ({ children }) => {
  return <div>LayoutProvider {children}</div>;
};

export default LayoutProvider;
