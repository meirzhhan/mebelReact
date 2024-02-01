import cl from './CartItem.module.scss';
type TTotal = {
  totalCount: number;
  totalPrice: number;
};

const CartTotal: React.FC<TTotal> = ({ totalCount, totalPrice }) => {
  const discount = totalPrice - Math.floor(totalPrice * 0.9);
  return (
    <div className={cl.total}>
      <span>Скидка: {discount.toLocaleString()} ₸</span>
      <div className={cl.total__main}>
        <p>{totalCount} товаров на сумму</p>
        <div className={cl.total__main__info}>
          <span className={cl.total__main__info__discount}>
            {Math.floor(totalPrice * 0.9).toLocaleString()} ₸
          </span>
          <span className={cl.total__main__info__price}>{totalPrice.toLocaleString()} ₸</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
