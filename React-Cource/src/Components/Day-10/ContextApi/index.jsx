/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

//step 01
export const BioContext = createContext();

//step 02

export const BioProvider = ({ children }) => {
  const myName = "Aoun Raza";
  const myAge = 28;
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};
