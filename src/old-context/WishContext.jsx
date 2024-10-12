import { createContext, useEffect, useState } from "react";

export const WishContext = createContext();

export function WishProvider({ children }) {
  const [wishes, setWishes] = useState(() => {
    const storedWishes = localStorage.getItem("wishes");
    return storedWishes ? JSON.parse(storedWishes) : [];
  });

  // Save product wish to local storage whenever the wish state changes
  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  const addToWish = (product) => {
    // Check if the product is already in the wishlist
    const existingProduct = wishes.find((item) => item.id === product.id);

    if (!existingProduct) {
      // If the product is not in the wishlist, add it
      setWishes((prev) => [...prev, product]);
    }
  };

  const removeFromWish = (product) => {
    setWishes((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <WishContext.Provider
      value={{ wishes, setWishes, addToWish, removeFromWish }}
    >
      {children}
    </WishContext.Provider>
  );
}
