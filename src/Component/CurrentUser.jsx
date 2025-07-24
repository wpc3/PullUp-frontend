import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(() => {
        const storedUser = localStorage.getItem('currentLoggedInUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    
}