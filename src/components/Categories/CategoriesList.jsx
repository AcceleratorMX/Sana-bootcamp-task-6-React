import React from 'react';
import useCategories from './useCategories';

const CategoriesList = () => {
    const {
        categories,
        handleDeleteCategory
    } = useCategories();

    return (
        <ul>
            {categories.map((category) => (
                <li key={category.id}>
                    {category.name}
                    <button
                        type="button"
                        style={{ marginLeft: '2rem', display: category.id > 4 ? '' : 'none' }}
                        onClick={() => handleDeleteCategory(category.id)}
                    >
                        Видалити
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CategoriesList;
