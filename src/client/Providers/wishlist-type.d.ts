import { Dispatch, SetStateAction } from "react";

export type WishlistContextType = {
  wishlist: ProductType[];
  setWishList: Dispatch<SetStateAction<ProductType[]>>;
};
