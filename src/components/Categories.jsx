import React from 'react';

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const categories = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Covered'];


 

  return (
    <div className="categories">
      <ul>
        {categories.map((elem, index) => {
          return (
            <li
              onClick={() => {
                onClickCategory(index);
              }}
              className={activeIndex === index ? 'active' : ''}
            >
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
