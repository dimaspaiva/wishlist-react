import React, { createContext, useContext, useState } from "react";
import { ProductType } from "../Pages/Home/Home";

export type WishContextType = {
  wishlist: ProductType[];
  setWishList: (producst: ProductType[]) => void;
};

export const WishlistContext = createContext<WishContextType>(
  {} as WishContextType
);

export const WishlistProvider: React.FC = (props) => {
  const [wishlist, setWishList] = useState<ProductType[]>([]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishList }}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
