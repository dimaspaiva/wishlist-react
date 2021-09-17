import { ProductType } from "../../Pages/Home/Home";

export type ProductProps = {
  product: ProductType;
  defineWish: (id: number) => void;
};
