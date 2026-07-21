// import { createContext,useState } from "react";

//  const MyStore = createContext();

// const ContextProvider = ({ children }) => {

//   const [productsData, setproductsData] = useState([]);


//   return (
//     <MyStore.Provider
//     value={{ productsData, setproductsData }}
// >
//       {children}
//     </MyStore.Provider>
//   );
// };

// export { MyStore, ContextProvider };


import { createContext, useState } from "react";

export const MyStore = createContext();

const ContextProvider = ({ children }) => {

    const [productsData, setproductsData] = useState([]);

    return (
        <MyStore.Provider
            value={{ productsData, setproductsData }}
        >
            {children}
        </MyStore.Provider>
    );
};

export default ContextProvider;