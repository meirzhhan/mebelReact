import cl from './HeaderSearch.module.scss';

import { ChangeEvent, useState } from 'react';

const HeaderSearch = () => {
  const [value, setValue] = useState<string>('');

  const onClickClear = () => {
    setValue('');
  };
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={cl.container}>
      <input className={cl.input} placeholder="Поиск..." value={value} onChange={onChangeInput} />
      {value && (
        <svg
          onClick={onClickClear}
          className={cl.clearIcon}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
        </svg>
      )}
    </div>
  );
};

export default HeaderSearch;
