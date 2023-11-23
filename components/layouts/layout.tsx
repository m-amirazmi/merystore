import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return <main className={font.className}>{children}</main>;
};

export default Layout;
