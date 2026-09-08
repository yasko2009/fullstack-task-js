export interface Product {
  id: number;
  name: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ноутбук",
    price: 90000,
  },
  {
    id: 2,
    name: "Смартфон",
    price: 50000,
  },
  {
    id: 3,
    name: "Наушники",
    price: 7000,
  },
];