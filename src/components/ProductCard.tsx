import type { Product } from "../models/Product";


interface ProductCardProps {
    product: Product;
}


export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card h-100">
            <img src={product.image} className="card-img-top p-3" alt={product.title} />
            <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <small className="text-muted text-capitalize">{product.category}</small>
            </div>
        </div>
    );
}