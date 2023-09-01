import React, { createContext, useContext, useState, useEffect } from 'react';

const ManageAccountContext = createContext();

export function ManageAccountProvider({children}) {
    const [view, setView] = useState('account');

    return (
        <ManageAccountContext.Provider value={{ view, setView }}>
            {children}
        </ManageAccountContext.Provider>
    );
}

export function useAccountView() {
    return useContext(ManageAccountContext);
}
