/* eslint-disable react-refresh/only-export-components */
// We are doing custom hooks where we can see that how we can create them and how we can things more simple. Take usecontext as
import { createContext, useContext } from "react";

//step 01
export const BioContext = createContext();

//step 02

export const BioProvider01 = ({ children }) => {
  const myName = "Ali Raza";
  const myAge = 28;
  const city = "Islamabad";
  const profession = "Full Stack Developer";
  return (
    <BioContext.Provider value={{ myName, myAge, city, profession }}>
      {children}
    </BioContext.Provider>
  );
};

//Custom Hook
export const useBioContext = () => {
  const context = useContext(BioContext);
  // If we call child component outside provider component in App.jsx. Then this will run
  if (context === undefined) {
    throw new Error("Component Must be wrapped withing provider comaponent");
  }
  return context;
};
