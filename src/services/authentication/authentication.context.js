import React, { useState, createContext } from "react";
import * as firebase from "firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  return (
    <AuthenticationContext.Provider>{children}</AuthenticationContext.Provider>
  );
};
