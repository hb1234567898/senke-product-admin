
import request from "./request";
import type { Product } from "../types/product";

export async function getProducts(
    signal?: AbortSignal
): Promise<Product[]> {
    const response = await request.get<Product[]>(
        "mock/products.json",
        { signal }
    );

    return response.data;
}
