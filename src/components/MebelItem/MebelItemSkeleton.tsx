import React from 'react';
import ContentLoader from 'react-content-loader';
import cl from './MebelItem.module.scss';

const MebelItemSkeleton = () => (
  <div className={cl.mebelContainer}>
    <ContentLoader
      speed={2}
      width={635}
      height={575}
      viewBox="0 0 635 575"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="10" ry="10" width="635" height="422" />
      <rect x="0" y="440" rx="10" ry="10" width="280" height="40" />
      <rect x="0" y="491" rx="10" ry="10" width="200" height="30" />
      <rect x="0" y="530" rx="10" ry="10" width="635" height="40" />
    </ContentLoader>
  </div>
);

export default MebelItemSkeleton;
