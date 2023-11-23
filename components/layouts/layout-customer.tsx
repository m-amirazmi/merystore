interface IProps {
  children: React.ReactNode;
}

const LayoutCustomer: React.FC<IProps> = ({ children }) => {
  return <div>LayoutCustomer {children}</div>;
};

export default LayoutCustomer;
