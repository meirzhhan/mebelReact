export type TMebel = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type TSearchMebelParams = {
  page: string;
  property: string;
  category: string;
  order: string;
  search: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IMebelSliceState {
  items: TMebel[];
  status: Status;
}
