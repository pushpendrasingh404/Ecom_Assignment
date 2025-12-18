interface CategoryListProps {
    categories: string[];
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
}


export function CategoryList({ categories, selectedCategory, onCategorySelect }: CategoryListProps) {
    return (
        <ul className="list-group">
            <li
                className={`list-group-item ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => onCategorySelect("all")}
            >
                All Categories
            </li>
            {categories.map((category) => (
                <li
                    key={category}
                    className={`list-group-item text-capitalize ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => onCategorySelect(category)}
                >
                    {category}
                </li>
            ))}
        </ul>
    );
}