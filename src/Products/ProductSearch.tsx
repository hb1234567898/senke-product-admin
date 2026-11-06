import { Search, X } from "lucide-react";

interface ProductSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ProductSearch({
                                          value,
                                          onChange
                                      }: ProductSearchProps) {
    return (
        <div className="product-search">
            <Search size={18} />

            <input
                type="search"
                placeholder="搜索车型名称"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="清空搜索"
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
}