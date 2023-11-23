interface IProps {
  children: React.ReactNode;
}

const LayoutMain: React.FC<IProps> = ({ children }) => {
  return <div>LayoutMain {children}</div>;
};

export default LayoutMain;
