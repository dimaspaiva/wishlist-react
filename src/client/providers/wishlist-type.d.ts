import { Dispatch, SetStateAction } from "react";

export type WishlistContextType = {
  wishlist: ProductType[];
  setWishlist: Dispatch<SetStateAction<ProductType[]>>;
};
