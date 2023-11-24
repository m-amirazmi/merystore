import Navbar from "./navbar";
import Topbar from "./topbar";

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <header>
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
