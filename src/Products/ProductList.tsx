
import type { Product } from "../types/product";
import ProductsCard from "./ProductsCard";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({
                                        products
                                    }: ProductListProps) {
    if (products.length === 0) {
        return (
            <div className="product-list-empty">
                <p>暂无符合条件的产品</p>
            </div>
        );
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductsCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}
