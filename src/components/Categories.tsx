import React from 'react';
type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const categories = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Covered'];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                onChangeCategory(index);
              }}
              className={value === index ? 'active' : ''}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
