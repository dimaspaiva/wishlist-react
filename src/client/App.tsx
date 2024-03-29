import React from "react";
import { WishlistProvider } from "./providers/wishlist";
import Routes from "./routes";

const App = () => {
  return (
    <WishlistProvider>
      <Routes />;
    </WishlistProvider>
  );
};

export default App;
