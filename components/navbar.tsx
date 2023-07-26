import Link from "next/link";

import getCategories from "@/services/get-categories";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-0">
            <p className="font-bold text-xl uppercase">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
