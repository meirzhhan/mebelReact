const Gallery = () => {
  const images = [
    'https://cdn0.divan.by/img/v1/bBYXTdtO5N0gRfUYsWIk8nqaEO6HRGucvlMQXJePDlc/rs:fit:875:1234:1:0:ce:0:0/g:ce:0:0/bg:ffffff/q:85/aHR0cHM6Ly9tZWJlbC5rei9pbWFnZXMvaG9tZUlkZWFzLzAuanBn.jpg',
    'https://cdn0.divan.by/img/v1/2swVMpIbUd8xztc7LTrss8HWjYnkEQsnWmzcGUcCVec/rs:fit:875:1234:1:0:ce:0:0/g:ce:0:0/bg:ffffff/q:85/aHR0cHM6Ly9tZWJlbC5rei9pbWFnZXMvaG9tZUlkZWFzLzguanBn.jpg',
    'https://cdn0.divan.by/img/v1/pYUo9hzcIDkY-kVSv9BZjaZ4BF3R9mOOHK7RUEKXbZY/rs:fit:875:1234:1:0:ce:0:0/g:ce:0:0/bg:ffffff/q:85/aHR0cHM6Ly9tZWJlbC5rei9pbWFnZXMvaG9tZUlkZWFzLzEuanBn.jpg',
  ];

  const xd = (id: number) => {
    let s = '';
    id === 0 ? (s = 'one') : id === 1 ? (s = 'two') : (s = 'three');
    return s;
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-wrapper">
          <img
            className={index === 0 || index === 5 ? 'gallery__img small' : 'gallery__img big'}
            key={index}
            src={image}
            alt=""
          />
          <div className={`gallery__button ${xd(index)}`}></div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
