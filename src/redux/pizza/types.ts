export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export enum Status {
  LOADING = 'loading',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface pizzaSliceState {
  items: Pizza[];
  status: Status;
}