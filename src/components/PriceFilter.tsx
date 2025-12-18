interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    onPriceChange: (min: number, max: number) => void;
}


export function PriceFilter({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) {
    return (
        <div className="mb-3">
            <label className="form-label">Price Range</label>
            <input
                type="range"
                className="form-range"
                min={0}
                max={1000}
                value={maxPrice}
                onChange={(e) => onPriceChange(minPrice, Number(e.target.value))}
            />
            <div>Up to ${maxPrice}</div>
        </div>
    );
}