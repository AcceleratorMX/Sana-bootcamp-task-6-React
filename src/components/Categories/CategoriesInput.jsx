import React from 'react';
import useCategories from './useCategories';

const CategoriesInput = () => {
    const {
        category,
        setCategory,
        handleAddCategory
    } = useCategories();

    return (
        <div>
            <input
                value={category}
                type="text"
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="button" onClick={handleAddCategory}>Додати</button>
        </div>
    );
};

export default CategoriesInput;
