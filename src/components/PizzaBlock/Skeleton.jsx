import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle x="15" cx="125" cy="125" r="125" />
    <rect x="0" y="290" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="321" rx="10" ry="10" width="280" height="80" />
    <rect x="10" y="417" rx="10" ry="10" width="117" height="20" />
    <rect x="152" y="419" rx="10" ry="10" width="120" height="36" />
  </ContentLoader>
);

export default Skeleton;
