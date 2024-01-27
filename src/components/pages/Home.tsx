import React from 'react';
import Categories from '../Categories/Categories';

const Home = () => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        {/* <Categories value={categoryId} onChangeCategory={onChangeCategory} /> */}
        {/* <Sort valueType={sortByType} valueOrder={sortByOrder} /> */}
      </div>
    </div>
  );
};

export default Home;
