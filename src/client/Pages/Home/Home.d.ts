export type ProductType = {
  id: number;
  title: string;
  description: string;
  image: string;
  style: string;
  price: number;
  description: string;
  avaibleSizes: {
    [key: string]: number;
  };
};
