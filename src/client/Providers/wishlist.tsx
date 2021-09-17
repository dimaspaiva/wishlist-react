import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../Pages/Home/Home";

export type WishContextType = {
  wishlist: ProductType[];
  setWishList: Dispatch<SetStateAction<ProductType[]>>;
};

export const WishlistContext = createContext<WishContextType>(
  {} as WishContextType
);

export const WishlistProvider: React.FC = (props) => {
  const [wishlist, setWishList] = useState<ProductType[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishList(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  console.log(wishlist);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishList }}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
