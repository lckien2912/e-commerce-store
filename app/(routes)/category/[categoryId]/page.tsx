import getProducts from "@/services/get-products";
import getCases from "@/services/get-cases";
import getPlates from "@/services/get-plates";
import getColors from "@/services/get-colors";
import getCategory from "@/services/get-category";
import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    caseId: string;
    plateId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    caseId: searchParams.caseId,
    plateId: searchParams.plateId,
  });
  const cases = await getCases();
  const plates = await getPlates();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Mobile Filter */}
            <MobileFilters cases={cases} plates={plates} colors={colors} />
            {/* PC Filter */}
            <div className="hidden lg:block">
              <Filter valueKey="caseId" name="Cases" data={cases} />
              <Filter valueKey="plateId" name="Plates" data={plates} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
