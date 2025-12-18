interface SortBarProps {
    onSortChange: (sortType: string) => void;
    isAllCategoriesSelected: boolean;
}


export function SortBar({ onSortChange, isAllCategoriesSelected }: SortBarProps) {
    return (
        <div className="d-flex gap-2 mb-3">
            <button className="btn btn-outline-primary" onClick={() => onSortChange("price")}
            >
                Sort by Price
            </button>
            {isAllCategoriesSelected && (
                <button className="btn btn-outline-secondary" onClick={() => onSortChange("discount")}>
                    Sort by Discount
                </button>
            )}
        </div>
    );
}