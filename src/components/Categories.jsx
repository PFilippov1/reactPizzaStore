import React from 'react';

export default function Categories({value, onChangeCategory}) {
  console.log(value)
    const categories = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Covered'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li key={index}
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
}
