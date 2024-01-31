export type TCartItems = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: number[];
  price: number;
  count: number;
};

export interface ICartSliceState {
  items: TCartItems[];
  totalPrice: number;
}
