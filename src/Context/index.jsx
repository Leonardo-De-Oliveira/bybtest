import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [adresses, setAdresses] = useState([]);

    const updateAddress = (newAdress) => {

        const updatedAddresses = adresses.map(address => {
            if (address.id === newAdress.id) {
                    return newAdress;
            }
            return address;
        });

        setAdresses(updatedAddresses);
    };

    const DeleteAddress = (id) => {

        const updatedAddresses = adresses.filter(address => {
            if (address.id !== id) {
                    return address;
            }
        });

        setAdresses(updatedAddresses);
    };
    

    const contextValue = {
        adresses,
        setAdresses,
        updateAddress,
        DeleteAddress
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };
