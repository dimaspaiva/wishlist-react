import React from "react";
import { WishlistProvider } from "./Providers/wishlist";
import Routes from "./routes";

const App = () => {
  return (
    <WishlistProvider>
      <Routes />;
    </WishlistProvider>
  );
};

export default App;
