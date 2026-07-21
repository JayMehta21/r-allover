import { createContext } from "react";

//set up of blank store
export const MyStore = createContext();

//make a provider who will store our data and will serve it to the customer.

export const ContextProvider = ({ children }) => {
    return <MyStore.Provider>{children}</MyStore.Provider>;
};


