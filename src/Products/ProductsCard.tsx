
import type { Product } from "../types/product";
import "./ProductsCard.css"

interface ProductCardProps {
    product: Product;
}

export default function ProductsCard({
                                         product
                                     }: ProductCardProps) {
    return (
        <article className="products-card">
            <h3 className="products-name">
                {product.name}
            </h3>

            <p className="products-price">
                ¥{product.price.toLocaleString("zh-CN")}
            </p>

            <div className="products-status-wrap">
        <span
            className={`products-status ${
                product.available ? "in-stock" : "out-of-stock"
            }`}
        >
          {product.available ? "有库存" : "无库存"}
        </span>
            </div>
        </article>
    );
}

