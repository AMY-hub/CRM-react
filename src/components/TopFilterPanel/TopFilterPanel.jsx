import { ProductFilter } from './ProductFilter';
import { StatusFilter } from './StatusFilter';

export const TopFilterPanel = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="row mb-3 justify-content-start">
                <div className="col">
                    <StatusFilter />
                </div>
                <div className="col">
                    <ProductFilter />
                </div>
            </div>
        </form>
    )
}
