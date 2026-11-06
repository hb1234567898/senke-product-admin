import ProductCard from "../Products/ProductCard.tsx";
import ProductSearch from "../Products/ProductSearch.tsx";
import {useEffect, useState} from "react";
import ProductList from "../Products/ProductList.tsx";
import type {Product} from "../types/product.ts";
import {getProducts} from "../api/productApi.ts";

const cards = [
    { id: 1, name: '产品总数', count: 4 },
    { id: 2, name: '在售', count: 3 },
    { id: 3, name: '下架', count: 1 },
];

export default function Products() {
    const [keyword, setKeyword] = useState("")
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        getProducts(controller.signal)
            .then(data => {
                console.log("产品数据:", data);

                if (!Array.isArray(data)) {
                    throw new Error("产品接口返回的不是数组");
                }
                setProducts(data)
            })
            .catch(err => {
                if (controller.signal.aborted) return;

                setError(
                    err instanceof Error ? err.message : "请求失败"
                );
            })
            .finally(() => {
                if (controller.signal.aborted) {
                    setLoading(false)
                }
            })
        return () => controller.abort();
    }, [])

    if (loading) return <p>产品加载中...</p>;
    if (error) return <p>加载失败：{error}</p>;

    const filterProducts = products.filter(product =>
        product.name
            .toLowerCase()
            .includes(keyword.trim().toLowerCase())
    );

    return (
        <div className={'app-shell'}>
            <div className="page-header">
                <div>
                    <h1 className="page-title">产品管理</h1>
                    <p className="page-description">
                        管理和维护摩托车产品信息
                    </p>
                </div>
            </div>

            <section className={'product-card'}>
                {cards.map(card => (
                    <ProductCard key={card.id} name={card.name} count={card.count} />
                ))}
            </section>

            <section className="content-card product-list-container">
                <div className="product-card-header">
                    <span>产品列表</span>
                    <button>+ 新增</button>
                </div>
                <ProductSearch value={keyword} onChange={setKeyword}/>
                <ProductList products={filterProducts} />
            </section>
        </div>
    );
}