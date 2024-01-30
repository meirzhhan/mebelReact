export type TSort = {
  name: string;
  property: string;
};

export interface IFilterSliceState {
  categoryId: number;
  sortByType: TSort;
  sortByOrder: string;
  searchValue: string;
}
