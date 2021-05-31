import React, { createContext, useState } from "react";

export const favoritesContext = createContext();

export const favoritesContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [favorites, setFavorites] = useState([]);

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
  };

  return <favoritesContext.Provider>{children}</favoritesContext.Provider>;
};
