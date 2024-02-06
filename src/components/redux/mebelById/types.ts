import { Status } from '../mebel/types';

export type TMebelById = {
  imageUrl: string;
  title: string;
  sizes: number[];
  price: number;
};

export type TMebelByIdState = {
  items: TMebelById;
  status: Status;
};
