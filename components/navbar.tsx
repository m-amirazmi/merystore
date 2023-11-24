import { Heart, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  return (
    <nav className="relative py-4 border-b">
      <div className="px-4 md:container flex">
        <Link href="/" className="text-3xl font-semibold">
          Bisum
        </Link>
        <div className="flex items-center gap-6 font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link className="hover:text-main transition-colors" href="/">
            Home
          </Link>
          <Link
            className="hover:text-main transition-colors"
            href="/categories"
          >
            Categories
          </Link>
          <Link className="hover:text-main transition-colors" href="/products">
            Products
          </Link>
          <Link className="hover:text-main transition-colors" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-main transition-colors" href="/shop">
            Shop
          </Link>
          <Link className="hover:text-main transition-colors" href="/contact">
            Contact
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/search">
            <Search />
          </Link>
          <Link href="/wishlist">
            <Heart />
          </Link>
          <Link href="/cart">
            <ShoppingBag />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
