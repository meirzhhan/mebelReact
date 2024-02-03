import ContentLoader from 'react-content-loader';
// React skeleton

const MebelSkeleton = () => {
  return (
    <ContentLoader
      className="mebel-block"
      speed={2}
      width={304}
      height={344}
      viewBox="0 0 304 344"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="10" ry="10" width="304" height="201" className="mebel-block__image" />
      <rect x="0" y="216" rx="10" ry="10" width="304" height="27" />
      <rect x="0" y="258" rx="10" ry="10" width="91" height="23" />
      <rect x="107" y="258" rx="10" ry="10" width="91" height="23" />
      <rect x="214" y="258" rx="10" ry="10" width="91" height="23" />
      <rect x="0" y="308" rx="10" ry="10" width="80" height="27" />
      <rect x="195" y="300" rx="10" ry="10" width="109" height="42" />
    </ContentLoader>
  );
};

export default MebelSkeleton;
