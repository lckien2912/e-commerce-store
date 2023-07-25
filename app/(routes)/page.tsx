import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/ui/product-list";
import getBillboard from "@/services/get-billboard";
import getProducts from "@/services/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("c2128f86-584c-4a7b-83b6-8d1160abacb9");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
