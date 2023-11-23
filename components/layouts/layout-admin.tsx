interface IProps {
  children: React.ReactNode;
}

const LayoutAdmin: React.FC<IProps> = ({ children }) => {
  return <div>LayoutAdmin {children}</div>;
};

export default LayoutAdmin;
