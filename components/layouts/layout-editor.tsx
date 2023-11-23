interface IProps {
  children: React.ReactNode;
}

const LayoutEditor: React.FC<IProps> = ({ children }) => {
  return <div>LayoutEditor {children}</div>;
};

export default LayoutEditor;
