import cl from './Categories.module.scss';

type TCategoriesProps = {
  value: number | string;
  onChangeCategory: (i: number) => void;
};

const Categories: React.FC<TCategoriesProps> = ({ value, onChangeCategory }) => {
  const categories: { type: string; img: string }[] = [
    {
      type: 'Диваны',
      img: 'https://cdn0.divan.by/img/v1/UoBzK2Lv7CuxFMbnV0xDaniSbPfti79xy4-OTyFHRJw/rs:fit:1920:1440:0:0/g:ce:0:0/q:85/czM6Ly9kaXZhbi9jYXRlZ29yeS1wb3B1bGFyLzQ3ODM3OTYucG5n.png',
    },
    {
      type: 'Кровати',
      img: 'https://cdn0.divan.by/img/v1/2sJectPYFydJ23zud9bh6MbpKPtiMRZT3Z2OssfXJJ0/rs:fit:1920:1440:0:0/g:ce:0:0/q:85/czM6Ly9kaXZhbi9jYXRlZ29yeS1wb3B1bGFyLzQ3ODM3OTcucG5n.png',
    },
    {
      type: 'Шкафы',
      img: 'https://cdn0.divan.by/img/v1/cPw1Zph084bvrPrPUFgC1bTNrxbC53_zMqmpteAVPZY/rs:fit:1920:1440:0:0/g:ce:0:0/q:85/czM6Ly9kaXZhbi9jYXRlZ29yeS1wb3B1bGFyLzQ3ODM3OTgucG5n.png',
    },
    {
      type: 'комоды',
      img: 'https://cdn0.divan.by/img/v1/dmYRR0U4_KT73ZnnvVezcKv6-a3nuLK04xWaYK21MK0/rs:fit:1920:1440:0:0/g:ce:0:0/q:85/czM6Ly9kaXZhbi9jYXRlZ29yeS1wb3B1bGFyLzQ3ODM4MDAucG5n.png',
    },
    {
      type: 'столы',
      img: 'https://cdn0.divan.by/img/v1/5rAQd4UB1hiHb3YquRWm83n4e4KEuM0o2JiU_s_0rjU/rs:fit:1920:1440:0:0/g:ce:0:0/q:85/czM6Ly9kaXZhbi9jYXRlZ29yeS1wb3B1bGFyLzQ3ODM4MDIucG5n.png',
    },
    {
      type: 'Освещение',
      img: 'https://cdn0.divan.by/img/v1/FbEspiVZcSvaj8vjhwlI1nrXk6IJD7ulL0Vg8UCR3uI/rs:fit:1920:1440:0:0/g:ce:0:0/q:85/czM6Ly9kaXZhbi9jYXRlZ29yeS1wb3B1bGFyLzQ3ODM4MDUucG5n.png',
    },
  ];

  return (
    <div className={cl.category}>
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i}>
            <div
              onClick={() => onChangeCategory(i + 1)}
              className={value === i + 1 ? 'active' : ''}>
              <img className={cl.category__image} src={categoryName.img} alt="" />
              <p>{categoryName.type}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
