import { useEffect, useState } from "react";
import { FakeStoreService } from "../api/fakeStoreService";
import type { Product } from "../models/Product";
import { CategoryList } from "../components/CategoryList";
import { ProductGrid } from "../components/ProductGrid";
import { PriceFilter } from "../components/PriceFilter";
import { SortBar } from "../components/SortBar";

export function ProductPage() {
    const [categories, setCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [maxPrice, setMaxPrice] = useState<number>(1000);

    useEffect(() => {
        FakeStoreService.getCategories().then(setCategories);
        FakeStoreService.getAllProducts().then(setProducts);
    }, []);

    const handleCategorySelect = async (category: string) => {
        setSelectedCategory(category);
        if (category === "all") {
            setProducts(await FakeStoreService.getAllProducts());
        } else {
            setProducts(await FakeStoreService.getProductsByCategory(category));
        }
    };

    const handleSortChange = (sortType: string) => {
        let sortedProducts = [...products];

        if (sortType === "price") {
            sortedProducts.sort((a, b) => a.price - b.price);
        }

        if (sortType === "discount" && selectedCategory === "all") {
            sortedProducts.sort((a, b) => {
                const discountA = a.category === "jewelery" ? 0.1 : a.category === "men's clothing" ? 0.3 : 0;
                const discountB = b.category === "jewelery" ? 0.1 : b.category === "men's clothing" ? 0.3 : 0;
                return discountB - discountA;
            });
        }

        setProducts(sortedProducts);
    };

    const filteredProducts = products.filter((product) => product.price <= maxPrice);

    return (
        <div className="container-fluid p-4">
            <div className="row">
                <aside className="col-md-3">
                    <CategoryList
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategorySelect={handleCategorySelect}
                    />
                </aside>
                <main className="col-md-9">
                    <SortBar
                        onSortChange={handleSortChange}
                        isAllCategoriesSelected={selectedCategory === "all"}
                    />
                    <PriceFilter
                        minPrice={0}
                        maxPrice={maxPrice}
                        onPriceChange={(_, max) => setMaxPrice(max)}
                    />
                    <ProductGrid products={filteredProducts} />
                </main>
            </div>
        </div>
    );
}