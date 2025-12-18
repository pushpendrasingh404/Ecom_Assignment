import type { Product } from "../models/Product";
import { ProductCard } from "./ProductCard";


interface ProductGridProps {
    products: Product[];
}


export function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="row g-3">
            {products.map((product) => (
                <div key={product.id} className="col-md-4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}